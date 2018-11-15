import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InlineEditComponent} from './inline-edit.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const InlineEditRoutes: Routes = [
  {
    path: '',
    component: InlineEditComponent,
    data: {
      heading: 'Editable Table'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(InlineEditRoutes),
    SharedModule
  ],
  declarations: [InlineEditComponent]
})
export class InlineEditModule { }
