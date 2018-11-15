import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { Error400Component } from './error-400/error-400.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { Error403Component } from './error-403/error-403.component';
import { Error404Component } from './error-404/error-404.component';
import { Error500Component } from './error-500/error-500.component';
import { Error503Component } from './error-503/error-503.component';

export const ErrorRoutes: Routes = [{
  path: '',
  data: {
    heading: 'Error Pages'
  },
  children: [
    {
      path: 'error-400',
      component: Error400Component,
      data: {
        heading: '400 Error',
        status: true
      }
    },
    {
      path: 'error-403',
      component: Error403Component,
      data: {
        heading: '403 Error',
        status: true
      }
    },
    {
      path: 'error-404',
      component: Error404Component,
      data: {
        heading: '404 Error',
        status: true
      }
    },
    {
      path: 'error-500',
      component: Error500Component,
      data: {
        heading: '500 Error',
        status: true
      }
    },
    {
      path: 'error-503',
      component: Error503Component,
      data: {
        heading: '503 Error',
        status: true
      }
    }
  ]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ErrorRoutes),
    SharedModule
  ],
  declarations: [ErrorComponent, Error400Component, Error403Component, Error404Component, Error500Component, Error503Component]
})
export class ErrorModule { }
