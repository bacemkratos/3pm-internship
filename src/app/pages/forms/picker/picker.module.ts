import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PickerComponent} from './picker.component';
import {SharedModule} from '../../../shared/shared.module';

export const PickerRoutes: Routes = [
  {
    path: '',
    component: PickerComponent,
    data: {
      heading: 'Form Picker'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PickerRoutes),
    SharedModule
  ],
  declarations: [PickerComponent]
})
export class PickerModule { }
