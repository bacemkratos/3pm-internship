import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductDetailComponent} from './product-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const ProductDetailsRoutes: Routes = [
  {
    path: '',
    component: ProductDetailComponent,
    data: {
      heading: 'Product Detail'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProductDetailsRoutes),
    SharedModule
  ],
  declarations: [ProductDetailComponent]
})
export class ProductDetailModule { }
