import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnobComponent } from './knob.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const KnobRoutes: Routes = [
  {
    path: '',
    component: KnobComponent,
    data: {
      heading: 'Knob Chart',
      status: false
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(KnobRoutes),
    SharedModule
  ],
  declarations: [KnobComponent]
})
export class KnobModule { }
