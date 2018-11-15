import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankStarterComponent } from './blank-starter.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const BlankStarterRoutes: Routes = [{
  path: '',
  component: BlankStarterComponent,
  data: {
    heading: 'Blank Starter Page'
  }
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BlankStarterRoutes),
    SharedModule
  ],
  declarations: [BlankStarterComponent]
})
export class BlankStarterModule { }
