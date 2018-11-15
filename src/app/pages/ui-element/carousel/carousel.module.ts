import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const CarouselRoutes: Routes = [
  {
    path: '',
    component: CarouselComponent,
    data: {
      heading: 'Carousel'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CarouselRoutes),
    SharedModule
  ],
  declarations: [CarouselComponent]
})
export class CarouselModule { }
