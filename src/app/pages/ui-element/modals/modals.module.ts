import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsComponent } from './modals.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const ModalsRoutes: Routes = [
  {
    path: '',
    component: ModalsComponent,
    data: {
      heading: 'Modals'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ModalsRoutes),
    SharedModule
  ],
  declarations: [ModalsComponent]
})
export class ModalsModule { }
