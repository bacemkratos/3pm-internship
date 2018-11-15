import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecoverPasswordComponent } from './recover-password.component';
import { RouterModule, Routes } from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const RecoverPasswordRoutes: Routes = [{
  path: '',
  component: RecoverPasswordComponent,
  data: {
    heading: 'Recover Password'
  }
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(RecoverPasswordRoutes),
    SharedModule
  ],
  declarations: [RecoverPasswordComponent]
})
export class RecoverPasswordModule { }
