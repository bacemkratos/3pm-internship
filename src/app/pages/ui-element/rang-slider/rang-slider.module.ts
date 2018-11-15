import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangSliderComponent } from './rang-slider.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const RangSliderRoutes: Routes = [
  {
    path: '',
    component: RangSliderComponent,
    data: {
      heading: 'Range Slider'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(RangSliderRoutes),
    SharedModule
  ],
  declarations: [RangSliderComponent]
})
export class RangSliderModule { }
