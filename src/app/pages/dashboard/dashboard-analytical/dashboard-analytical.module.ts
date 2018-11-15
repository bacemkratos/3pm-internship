import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardAnalyticalComponent } from './dashboard-analytical.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const AnalyticalRoutes: Routes = [
  {
    path: '',
    component: DashboardAnalyticalComponent,
    data: {
      heading: 'Analytical Dashboard'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AnalyticalRoutes),
    SharedModule
  ],
  declarations: [DashboardAnalyticalComponent]
})
export class DashboardAnalyticalModule { }
