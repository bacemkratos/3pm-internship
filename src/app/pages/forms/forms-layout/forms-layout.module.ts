import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsLayoutComponent} from './forms-layout.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const FormLayoutRoutes: Routes = [
  {
    path: '',
    component: FormsLayoutComponent,
    data: {
      heading: 'Form Layout'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FormLayoutRoutes),
    SharedModule
  ],
  declarations: [FormsLayoutComponent]
})
export class FormsLayoutModule { }
