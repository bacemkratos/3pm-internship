import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const ButtonsRoutes: Routes = [
  {
    path: '',
    component: ButtonsComponent,
    data: {
      heading: 'Buttons'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ButtonsRoutes),
    SharedModule
  ],
  declarations: [ButtonsComponent]
})
export class ButtonsModule { }
