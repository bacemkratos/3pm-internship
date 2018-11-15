import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AnimationsComponent} from './animations.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const AnimationsRoutes: Routes = [{
  path: '',
  component: AnimationsComponent,
  data: {
    heading: 'Animations',
    breadcrumb: 'Animations'
  }
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AnimationsRoutes),
    SharedModule
  ],
  declarations: [AnimationsComponent]
})
export class AnimationsModule { }
