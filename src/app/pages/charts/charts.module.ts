import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

export const ChartsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'morris-js',
        loadChildren: './morris-js/morris-js.module#MorrisJsModule',
        data: {
          heading: 'Morris Chart'
        }
      },
      {
        path: 'peity',
        loadChildren: './peity/peity.module#PeityModule',
        data: {
          heading: 'Peity Chart'
        }
      },
      {
        path: 'knob',
        loadChildren: './knob/knob.module#KnobModule',
        data: {
          heading: 'Knob Chart'
        }
      },
      {
        path: 'spark-lines',
        loadChildren: './spark-lines/spark-lines.module#SparkLinesModule',
        data: {
          heading: 'Spark-line Chart'
        }
      }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ChartsRoutes)
  ],
  declarations: []
})
export class ChartsModule { }
