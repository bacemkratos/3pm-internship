import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomScrollComponent } from './custom-scroll.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const CustomScrollRoutes: Routes = [{
  path: '',
  component: CustomScrollComponent,
  data: {
    heading: 'Custom Scroll'
  }
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CustomScrollRoutes),
    SharedModule
  ],
  declarations: [CustomScrollComponent]
})
export class CustomScrollModule { }
