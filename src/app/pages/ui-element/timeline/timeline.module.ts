import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const TimelineRoutes: Routes = [
  {
    path: '',
    component: TimelineComponent,
    data: {
      heading: 'Timeline'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TimelineRoutes),
    SharedModule
  ],
  declarations: [TimelineComponent]
})
export class TimelineModule { }
