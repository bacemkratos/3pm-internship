import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailBoxComponent } from './mail-box.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const MailBoxRoutes: Routes = [
  {
    path: '',
    component: MailBoxComponent,
    data: {
      heading: 'Mail Box'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MailBoxRoutes),
    SharedModule
  ],
  declarations: [MailBoxComponent]
})
export class MailBoxModule { }
