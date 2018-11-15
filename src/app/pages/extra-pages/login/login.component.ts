import { Component, OnInit } from '@angular/core';
import { trigger, state, style, AUTO_STYLE, transition, animate} from '@angular/animations';
import {AuthenticationService} from '../../../services/authentication-service.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, FormsModule} from '@angular/forms';
import {defaultid} from '../../../AppConfig';
import {UserModel} from '../../../models/User';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
    animations: [
    trigger('cardToggle', [
      state('collapsed, void',
        style({
          overflow: 'hidden',
          height: '0px',
        })
      ),
      state('expanded',
        style({
          height: AUTO_STYLE,
        })
      ),
      transition('collapsed <=> expanded', [
        animate('500ms ease-in-out')
      ])
    ]),
    trigger('cardToggleInverse', [
      state('collapsed, void',
        style({
          overflow: 'hidden',
          height: '0px',
        })
      ),
      state('expanded',
        style({
          height: AUTO_STYLE,
        })
      ),
      transition('collapsed <=> expanded', [
        animate('50ms ease-in-out')
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {
  public menuType: string;
  public headerType: string;
  public sidebarType: string;
  public themeType: string;
  public toggledArrow: string;
  public windowHeight: number;
  public windowWidth: number;
  public settingToggle: string;
  public cardToggle = 'collapsed';

 // data
  error = false;
  message = null;
  rememberMe: boolean = false ;


  constructor(private authService: AuthenticationService, private router: Router) {
    this.themeType = 'default';
    this.toggledArrow = 'icon-arrow-left-circle';
    this.settingToggle = 'off';
    this.windowHeight = window.innerHeight - 60;
    this.windowWidth = window.innerWidth;
    if (this.windowWidth < 1170) {
      this.menuType = 'mini-sidebar';
    }
    if (this.windowWidth < 768) {
      this.toggledArrow = 'fa fa-bars';
    }
  }

  ngOnInit() {
   this.authService.token !== null  ?  this.router.navigate(['/3pm']) : {} ;
   this.rememberMe = true ;
    this.error = false ;
    this.message = null ;
  }

  onResize(event) {
    this.windowHeight = event.target.innerHeight - 60;
    this.windowWidth = window.innerWidth;
    if (this.windowWidth < 1170) {
      this.menuType = 'mini-sidebar';
    } else {
      this.menuType = '';
    }

    if (this.windowWidth < 768) {
      this.toggledArrow = this.menuType === 'mini-sidebar show-sidebar' ? 'fa fa-close' : 'fa fa-bars';
    } else {
      this.toggledArrow = this.menuType === 'mini-sidebar' ? 'fa fa-bars' : 'icon-arrow-left-circle';
    }
  }

  toggleCard() {
    this.cardToggle = this.cardToggle === 'collapsed' ? 'expanded' : 'collapsed';
  }


  login(datas) {

    this.authService.login(datas.email , datas.password).subscribe(
      (data: any) => {
        if(data.body.code === 0){
          localStorage.setItem('remember', this.rememberMe.toString()) ;
          this.authService.token = data.body.result.token ;

          this.authService.cacheValues();
          this.getUserInfo();
        } else {
          this.error = true;
          data.body.message === 'Bad credentials.' ? this.message =
            'Username or/and Password is wrong ' : this.message = data.body.message ;
        }
      } , (error1: HttpErrorResponse) => {
        if ( error1.status === 401 ) {
        }
      }
    );
  }


  getUserInfo() {
    this.authService.getUserInfo().subscribe(
      (data: any) => {

        this.authService.user = data.data.user ;
        console.log(this.authService.user);
        this.authService.cacheValues();
      } ,
      error1 =>  {},
      () =>   this.router.navigate(['dashboard/status'])
    ) ;
  }



}
