import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModernComponent } from './dashboard-modern.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const ModernRoutes: Routes = [
  {
    path: '',
    component: DashboardModernComponent,
    data: {
      heading: 'Modern Dashboard'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ModernRoutes),
    SharedModule
  ],
  declarations: [DashboardModernComponent]
})
export class DashboardModernModule { }
