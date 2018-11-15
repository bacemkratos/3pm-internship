import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SparkLinesComponent } from './spark-lines.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const SparkLineRoutes: Routes = [
  {
    path: '',
    component: SparkLinesComponent,
    data: {
      heading: 'Spark-line Chart',
      status: false
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SparkLineRoutes),
    SharedModule
  ],
  declarations: [SparkLinesComponent]
})
export class SparkLinesModule { }
