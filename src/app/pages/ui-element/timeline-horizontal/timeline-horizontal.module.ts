import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineHorizontalComponent } from './timeline-horizontal.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const TimelineHorizontalRoutes: Routes = [
  {
    path: '',
    component: TimelineHorizontalComponent,
    data: {
      heading: 'Horizontal Timeline'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TimelineHorizontalRoutes),
    SharedModule
  ],
  declarations: [TimelineHorizontalComponent]
})
export class TimelineHorizontalModule { }
