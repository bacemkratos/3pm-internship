import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlComponent } from './control.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const ControlRoutes: Routes = [
  {
    path: '',
    component: ControlComponent,
    data: {
      heading: 'Icheck Control'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ControlRoutes),
    SharedModule
  ],
  declarations: [ControlComponent]
})
export class ControlModule { }
