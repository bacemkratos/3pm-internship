import {Component, HostListener, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AuthenticationService} from './services/authentication-service.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet><app-spinner></app-spinner></router-outlet>',
  providers:[ HttpClientModule]
})
export class AppComponent implements OnInit {
  constructor( private  authService: AuthenticationService  ) {

    authService.readValues();
  }
  @HostListener('window:unload', ['$event'])
  unloadHandler(event) {
    const test = localStorage.getItem('remember') === 'true'  ;
    test === true ? { } : localStorage.clear() ;

  }
  ngOnInit(){
   this.authService.readValues();
  }

}
