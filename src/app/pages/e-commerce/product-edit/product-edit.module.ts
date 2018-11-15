import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductEditComponent } from './product-edit.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const ProductEditRoutes: Routes = [
  {
    path: '',
    component: ProductEditComponent,
    data: {
      heading: 'Product Edit'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProductEditRoutes),
    SharedModule
  ],
  declarations: [ProductEditComponent]
})
export class ProductEditModule { }
