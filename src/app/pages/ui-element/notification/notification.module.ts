import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const NotificationRoutes: Routes = [
  {
    path: '',
    component: NotificationComponent,
    data: {
      heading: 'Notification'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(NotificationRoutes),
    SharedModule
  ],
  declarations: [NotificationComponent]
})
export class NotificationModule { }
