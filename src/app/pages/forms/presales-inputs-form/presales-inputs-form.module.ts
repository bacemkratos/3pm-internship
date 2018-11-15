import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PresalesInputsFormComponent} from './presales-inputs-form.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import { ProjectRiskOppDepTableComponent } from './project-risk-opp-dep-table/project-risk-opp-dep-table.component';
import { ProjectHistoryTableComponent } from './project-history-table/project-history-table.component';
import { BsDatepickerModule} from 'ngx-bootstrap';

export const PresalesInputsFormRoutes: Routes = [
  {
    path: '',
    component: PresalesInputsFormComponent,
    data: {
      heading: 'Presales Inputs Form'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PresalesInputsFormRoutes),
    SharedModule,
    BsDatepickerModule.forRoot(),
  ],
  declarations: [PresalesInputsFormComponent, ProjectRiskOppDepTableComponent, ProjectHistoryTableComponent]
})
export class PresalesInputsFormModule { }
