import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialInputsComponent } from './financial-inputs.component';
import { ProjectTermsComponent } from './project-terms/project-terms.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {BsDatepickerModule} from 'ngx-bootstrap';

export const PMIRoutes: Routes = [
  {
    path: '',
    component: FinancialInputsComponent,
    data: {
      heading: 'Project Financial Inputs'
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
  declarations: [FinancialInputsComponent, ProjectTermsComponent]
})
export class FinancialInputsModule { }
