import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

export const AccountRoutes: Routes = [{
  path: '',
  component: AccountComponent,
  data: {
    heading: 'Account Settings'
  }
}];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AccountRoutes),
    SharedModule
  ],
  declarations: [AccountComponent]
})
export class AccountModule { }
