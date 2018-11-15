import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapComponent } from './bootstrap.component';
import {Routes, RouterModule} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {BasicComponent} from './basic/basic.component';
import {BorderComponent} from './border/border.component';

export const BootstrapRoutes: Routes = [
  {
    path: '',
    component: BootstrapComponent,
    data: {
      heading: 'Bootstrap Tables'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BootstrapRoutes),
    SharedModule
  ],
  declarations: [BootstrapComponent, BasicComponent, BorderComponent]
})
export class BootstrapModule { }
