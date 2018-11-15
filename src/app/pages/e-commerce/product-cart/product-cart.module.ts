import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCartComponent } from './product-cart.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const ProductCartRoutes: Routes = [
  {
    path: '',
    component: ProductCartComponent,
    data: {
      heading: 'Product Cart'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProductCartRoutes),
    SharedModule
  ],
  declarations: [ProductCartComponent]
})
export class ProductCartModule { }
