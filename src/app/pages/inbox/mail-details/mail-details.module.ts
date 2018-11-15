import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailDetailsComponent } from './mail-details.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const MailDetailsRoutes: Routes = [
  {
    path: '',
    component: MailDetailsComponent,
    data: {
      heading: 'Mail Details'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MailDetailsRoutes),
    SharedModule
  ],
  declarations: [MailDetailsComponent]
})
export class MailDetailsModule { }
