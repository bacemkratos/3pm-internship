import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const LoginRoutes: Routes = [{
  path: '',
  component: LoginComponent,
  data: {
    heading: 'Login'
  }
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LoginRoutes),
    SharedModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }



















