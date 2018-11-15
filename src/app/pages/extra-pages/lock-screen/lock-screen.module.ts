import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LockScreenComponent } from './lock-screen.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const LockScreenRoutes: Routes = [{
  path: '',
  component: LockScreenComponent,
  data: {
    heading: 'Lock Screen'
  }
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LockScreenRoutes),
    SharedModule
  ],
  declarations: [LockScreenComponent]
})
export class LockScreenModule { }
