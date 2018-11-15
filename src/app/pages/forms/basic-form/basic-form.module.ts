import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicFormComponent } from './basic-form.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const BasicFormRoutes: Routes = [
  {
    path: '',
    component: BasicFormComponent,
    data: {
      heading: 'Basic Forms'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BasicFormRoutes),
    SharedModule
  ],
  declarations: [BasicFormComponent]
})
export class BasicFormModule { }
