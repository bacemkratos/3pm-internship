import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WellsComponent } from './wells.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export  const WellsRoutes: Routes = [
  {
    path: '',
    component: WellsComponent,
    data: {
      heading: 'Panels and Well'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WellsRoutes),
    SharedModule
  ],
  declarations: [WellsComponent]
})
export class WellsModule { }
