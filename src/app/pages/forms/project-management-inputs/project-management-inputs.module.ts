import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {ProjectManagementInputsComponent} from "./project-management-inputs.component";
import { ProjectObjectivesComponent } from './project-objectives/project-objectives.component';
import { ProjectRisksComponent } from './project-risks/project-risks.component';
import { BsDatepickerModule} from 'ngx-bootstrap';
import { ProjectOrganizationComponent } from './project-organization/project-organization.component';


export const PMIRoutes: Routes = [
  {
    path: '',
    component: ProjectManagementInputsComponent,
    data: {
      heading: 'Project Management Inputs'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PMIRoutes),
    SharedModule ,
    BsDatepickerModule.forRoot()


  ],
  declarations: [ProjectManagementInputsComponent, ProjectObjectivesComponent, ProjectRisksComponent, ProjectOrganizationComponent]
})
export class PMIModule { }
