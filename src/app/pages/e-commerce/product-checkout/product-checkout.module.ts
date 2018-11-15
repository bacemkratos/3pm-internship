import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCheckoutComponent } from './product-checkout.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const ProductCheckoutRoutes: Routes = [
  {
    path: '',
    component: ProductCheckoutComponent,
    data: {
      heading: 'Product Checkout'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProductCheckoutRoutes),
    SharedModule
  ],
  declarations: [ProductCheckoutComponent]
})
export class ProductCheckoutModule { }
