import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapUiComponent } from './bootstrap-ui.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const BootstrapUIRoutes: Routes = [
  {
    path: '',
    component: BootstrapUiComponent,
    data: {
      heading: 'Bootstrap UI'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BootstrapUIRoutes),
    SharedModule
  ],
  declarations: [BootstrapUiComponent]
})
export class BootstrapUiModule { }
