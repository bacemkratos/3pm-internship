import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLayoutComponent } from './table-layout.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const TableLayoutRoutes: Routes = [
  {
    path: '',
    component: TableLayoutComponent,
    data: {
      heading: 'Tables Layout',
      status: false
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TableLayoutRoutes),
    SharedModule
  ],
  declarations: [TableLayoutComponent]
})
export class TableLayoutModule { }
