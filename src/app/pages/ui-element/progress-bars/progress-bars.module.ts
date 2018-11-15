import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarsComponent } from './progress-bars.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const ProgressRoutes: Routes = [
  {
    path: '',
    component: ProgressBarsComponent,
    data: {
      heading: 'Progress Bars'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProgressRoutes),
    SharedModule
  ],
  declarations: [ProgressBarsComponent]
})
export class ProgressBarsModule { }
