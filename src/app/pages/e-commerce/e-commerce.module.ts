import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

export const ECommerceRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        data: {
          heading: 'Dashboard'
        }
      },
      {
        path: 'products',
        loadChildren: './products/products.module#ProductsModule',
        data: {
          heading: 'Products'
        }
      },
      {
        path: 'product-detail',
        loadChildren: './product-detail/product-detail.module#ProductDetailModule',
        data: {
          heading: 'Product Detail'
        }
      },
      {
        path: 'product-edit',
        loadChildren: './product-edit/product-edit.module#ProductEditModule',
        data: {
          heading: 'Product Edit'
        }
      },
      {
        path: 'product-orders',
        loadChildren: './product-orders/product-orders.module#ProductOrdersModule',
        data: {
          heading: 'Product Orders'
        }
      },
      {
        path: 'product-cart',
        loadChildren: './product-cart/product-cart.module#ProductCartModule',
        data: {
          heading: 'Product Cart'
        }
      },
      {
        path: 'product-checkout',
        loadChildren: './product-checkout/product-checkout.module#ProductCheckoutModule',
        data: {
          heading: 'Product Checkout'
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ECommerceRoutes)
  ],
  declarations: []
})
export class ECommerceModule { }
