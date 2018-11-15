import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsComponent } from './steps.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const StepsRoutes: Routes = [
  {
    path: '',
    component: StepsComponent,
    data: {
      heading: 'Steps'
    }
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(StepsRoutes),
    SharedModule
  ],
  declarations: [StepsComponent]
})
export class StepsModule { }
