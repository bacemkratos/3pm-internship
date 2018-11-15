import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const ProductsRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    data: {
      heading: 'Products'
    }
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProductsRoutes),
    SharedModule
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }
