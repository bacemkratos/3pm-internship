import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './status.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {SharedModule} from '../../../shared/shared.module';
import { ProjectHealthStatusComponent } from './project-health-status/project-health-status.component';
import { FiltersComponent } from './filters/filters.component';
import { ProjectGlobalStatusComponent } from './project-global-status/project-global-status.component';
import { FinancialHealthStatusComponent } from './financial-health-status/financial-health-status.component';

export const ModernRoutes: Routes = [
  {
    path: '',
    component: StatusComponent,
    data: {
      heading: 'Status'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ModernRoutes),
    SharedModule
  ],
  declarations: [StatusComponent, FiltersComponent, ProjectHealthStatusComponent, FinancialHealthStatusComponent, ProjectGlobalStatusComponent]

})
export class StatusModule { }
