import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductOrdersComponent } from './product-orders.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const ProductOrdersRoutes: Routes = [
  {
    path: '',
    component: ProductOrdersComponent,
    data: {
      heading: 'Product Orders'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProductOrdersRoutes),
    SharedModule
  ],
  declarations: [ProductOrdersComponent]
})
export class ProductOrdersModule { }
