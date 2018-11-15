import { Injectable } from '@angular/core';
import {UserModel} from '../models/User';
import {baseUrl, loginUrl, refreshTokenUrl, userUrl} from '../AppConfig';
import {StorageService} from './storage-service.service';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable(

)
export class AuthenticationService {

  user: UserModel ;
  token: string;
  constructor(private Storage: StorageService , private http: HttpClient, private apollo: Apollo , private router: Router) {

  }
  login(email: string, password: string) {
    const url = baseUrl + loginUrl ;

    let headers = new HttpHeaders() ;
    headers = headers.append('Content-type', 'application/x-www-form-urlencoded') ;
    const body = new URLSearchParams();
    body.set('_username', email);
    body.set('_password', password);
    return this.http.post(url, body.toString(),{ headers: headers , observe: 'response' , responseType: 'json' ,
      params: null , reportProgress: false
    });

  }

  logout(){
    this.clearValues() ;
    location.reload();
  }

  getNewToken() {
    const url = baseUrl + refreshTokenUrl;
    const refToken = this.Storage.get('refresh_token', 'null') ;
    return this.http.post(url, null, { headers: refToken}) ;
  }


  getUserInfo() {
    this.apollo.getClient().resetStore();
    const quer = gql`query {
user{
id,
email,
roles,
username
}
}`;
    return this.apollo.query({
      query: quer

    });
  }
editUserRoles(user_id: any , roles: any){

  const quer = gql`mutation edit($id: String, $roles: [String]) {
  editUser(id: $id, roles: $roles) {
    id
  }
}
`;
  return this.apollo.mutate({
    mutation: quer ,
        variables: {
          id: user_id,
          roles: roles
        }
  });

}
  cacheValues() {
    this.Storage.set('token', this.token) ;
    this.Storage.set('user', this.user) ;
  }
  readValues() {
    this.token = this.Storage.get('token', null) ;
    this.user = this.Storage.get('user', null) ;
  }
  clearValues() {
    this.Storage.clearAll() ;
  }


}
@Injectable( )
export class AuthGuardService implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.user ) {
      return true;
    } else {
      this.router.navigate(['/login'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }
}

