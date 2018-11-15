import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RibbonsComponent } from './ribbons.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const RibbonsRoutes: Routes = [
  {
    path: '',
    component: RibbonsComponent,
    data: {
      heading: 'Ribbons'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(RibbonsRoutes),
    SharedModule
  ],
  declarations: [RibbonsComponent]
})
export class RibbonsModule { }
