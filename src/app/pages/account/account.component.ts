import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication-service.service';
import {UserModel} from '../../models/User';
import {StorageService} from '../../services/storage-service.service';
import '../../../assets/plugins/toast-master/js/jquery.toast.js';
declare var $: any;

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css', '../../../assets/plugins/toast-master/css/jquery.toast.css']
})
export class AccountComponent implements OnInit {

  constructor( private auth: AuthenticationService , private storage: StorageService) { }
  user: UserModel ;
  ngOnInit() {
    this.user = Object.assign({}, this.auth.user);

  }

  addChoice(choice: string)
  {
  this.user.roles.push(choice) ;

  }
  checkChoice(choice: string){
    return  this.user.roles.includes(choice, 0);
  }
  deleteChoice(choice: string) {
    this.user.roles.splice(this.user.roles.indexOf(choice), 1);
  }
  onClickRoles(choice: any)
  {  if (this.checkChoice(choice))
  {
     this.deleteChoice(choice) ;
  }else {
    this.addChoice(choice) ;
  }

  }
  saveRoles(userid: any , roles: any)
  {

    this.storage.set('user', this.user);
    this.auth.editUserRoles(userid , roles).subscribe( (data: any) =>
    {
      $.toast({
        heading: 'User Roles ',
        text: `User Roles have been updated`,
        position: 'top-right',
        showHideTransition: 'slide',
        loaderBg: '#ff0003',
        icon: 'success',
        hideAfter: 5000,
        stack: 6,
        loader: false
      }) ;
    } , error1 => {
      $.toast({
        heading: 'User Roles ',
        text: `User roles failed to update due to the following ${error1}`,
        position: 'top-right',
        showHideTransition: 'slide',
        loaderBg: '#ff0003',
        icon: 'error',
        hideAfter: 5000,
        stack: 6,
        loader: false
      }) ;
      }
    );
  }
}
