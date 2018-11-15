import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

export const TablesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        loadChildren: './basic/basic.module#BasicModule',
        data: {
          heading: 'Basic Tables'
        }
      },
      {
        path: 'table-layout',
        loadChildren: './table-layout/table-layout.module#TableLayoutModule',
        data: {
          heading: 'Tables Layout'
        }
      },
      {
        path: 'data-table',
        loadChildren: './data-table/data-table.module#DataTableModule',
        data: {
          heading: 'Tables Layout'
        }
      },
      {
        path: 'bootstrap',
        loadChildren: './bootstrap/bootstrap.module#BootstrapModule',
        data: {
          heading: 'Bootstrap Table'
        }
      },
      {
        path: 'inline-edit',
        loadChildren: './inline-edit/inline-edit.module#InlineEditModule',
        data: {
          heading: 'Editable Table'
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TablesRoutes)
  ],
  declarations: []
})
export class TablesModule { }
