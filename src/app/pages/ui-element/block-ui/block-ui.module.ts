import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockUiComponent } from './block-ui.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const BlockUIRoutes: Routes = [
  {
    path: '',
    component: BlockUiComponent,
    data: {
      heading: 'Panels with BlockUI'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BlockUIRoutes),
    SharedModule
  ],
  declarations: [BlockUiComponent]
})
export class BlockUiModule { }
