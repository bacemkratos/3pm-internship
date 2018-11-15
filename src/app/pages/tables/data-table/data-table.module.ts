import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { BasicDatatableComponent } from './basic-datatable/basic-datatable.component';
import {BasicComponent} from './basic/basic.component';
import {ChildRowComponent} from './child-row/child-row.component';

export const DataTableRoutes: Routes = [
  {
    path: '',
    component: DataTableComponent,
    data: {
      heading: 'Data Tables',
      status: false
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DataTableRoutes),
    SharedModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [DataTableComponent, BasicDatatableComponent, BasicComponent, ChildRowComponent]
})
export class DataTableModule { }
