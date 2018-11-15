import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MorrisJsComponent } from './morris-js.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const MorrisRoutes: Routes = [
  {
    path: '',
    component: MorrisJsComponent,
    data: {
      heading: 'Morris Chart',
      status: false
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MorrisRoutes),
    SharedModule
  ],
  declarations: [MorrisJsComponent]
})
export class MorrisJsModule { }
