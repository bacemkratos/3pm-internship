import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsComponent } from './widgets.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

export const WidgetsRoutes: Routes = [
  {
    path: '',
    component: WidgetsComponent,
    data: {
      heading: 'Widgets'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WidgetsRoutes),
    SharedModule
  ],
  declarations: [WidgetsComponent]
})
export class WidgetsModule { }
