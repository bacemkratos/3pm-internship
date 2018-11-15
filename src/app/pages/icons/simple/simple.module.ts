import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleComponent } from './simple.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const SimpleRoutes: Routes = [
  {
    path: '',
    component: SimpleComponent,
    data: {
      heading: 'Map',
      status: false
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SimpleRoutes),
    SharedModule
  ],
  declarations: [SimpleComponent]
})
export class SimpleModule { }
