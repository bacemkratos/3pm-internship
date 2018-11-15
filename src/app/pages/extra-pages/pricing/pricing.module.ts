import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './pricing.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const PricingRoutes: Routes = [{
  path: '',
  component: PricingComponent,
  data: {
    heading: 'Pricing Table'
  }
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PricingRoutes),
    SharedModule
  ],
  declarations: [PricingComponent]
})
export class PricingModule { }
