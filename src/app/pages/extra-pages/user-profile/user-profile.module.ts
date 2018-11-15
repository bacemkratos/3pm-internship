import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';


export const UserProfileRoutes: Routes = [{
  path: '',
  component: UserProfileComponent,
  data: {
    heading: 'Profile'
  }
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserProfileRoutes),
    SharedModule
  ],
  declarations: [UserProfileComponent]
})
export class UserProfileModule { }
