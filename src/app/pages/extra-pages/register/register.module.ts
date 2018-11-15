import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const RegisterRoutes: Routes = [{
  path: '',
  component: RegisterComponent,
  data: {
    heading: 'Register'
  }
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(RegisterRoutes),
    SharedModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
