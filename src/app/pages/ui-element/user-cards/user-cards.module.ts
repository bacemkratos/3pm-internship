import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardsComponent } from './user-cards.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const UserCardsRoutes: Routes = [
  {
    path: '',
    component: UserCardsComponent,
    data: {
      heading: 'User Cards'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserCardsRoutes),
    SharedModule
  ],
  declarations: [UserCardsComponent]
})
export class UserCardsModule { }
