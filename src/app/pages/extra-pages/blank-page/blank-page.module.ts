import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankPageComponent } from './blank-page.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const BlankPageRoutes: Routes = [{
  path: '',
  component: BlankPageComponent,
  data: {
    heading: 'Blank Page'
  }
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BlankPageRoutes),
    SharedModule
  ],
  declarations: [BlankPageComponent]
})
export class BlankPageModule { }
