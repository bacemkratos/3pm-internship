import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeityComponent } from './peity.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const PeityRoutes: Routes = [
  {
    path: '',
    component: PeityComponent,
    data: {
      heading: 'Peity Chart',
      status: false
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PeityRoutes),
    SharedModule
  ],
  declarations: [PeityComponent]
})
export class PeityModule { }
