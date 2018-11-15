import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCleanComponent } from './dashboard-clean.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

export const CleanRoutes: Routes = [
  {
    path: '',
    component: DashboardCleanComponent,
    data: {
      heading: 'Clean Dashboard'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CleanRoutes),
    SharedModule
  ],
  declarations: [DashboardCleanComponent]
})
export class DashboardCleanModule { }
