import {Injectable, Injector} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AuthenticationService} from './authentication-service.service';
import {baseUrl, loginUrl} from '../AppConfig';
import {Router} from '@angular/router';

@Injectable()
export class AuthIntercepterService implements  HttpInterceptor
{

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     const auth = this.injector.get(AuthenticationService);
    const rout = this.injector.get(Router);
  if ( req.url !== baseUrl + loginUrl)
  {


    req = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${auth.token}`
      },
    });

    }
    return next.handle(req).catch(err => {

      return Observable.throw(err);
    });
  }

}
