import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const BasicTableRoutes: Routes = [
  {
    path: '',
    component: BasicComponent,
    data: {
      heading: 'Basic Tables',
      status: false
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BasicTableRoutes),
    SharedModule
  ],
  declarations: [BasicComponent]
})
export class BasicModule { }
