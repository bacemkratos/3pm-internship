import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddonsComponent } from './addons.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const AddonsRoutes: Routes = [
  {
    path: '',
    component: AddonsComponent,
    data: {
      heading: 'Forms Addons'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AddonsRoutes),
    SharedModule
  ],
  declarations: [AddonsComponent]
})
export class AddonsModule { }
