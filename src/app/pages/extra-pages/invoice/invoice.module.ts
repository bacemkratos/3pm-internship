import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './invoice.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const InvoiceRoutes: Routes = [{
  path: '',
  component: InvoiceComponent,
  data: {
    heading: 'Invoice'
  }
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(InvoiceRoutes),
    SharedModule
  ],
  declarations: [InvoiceComponent]
})
export class InvoiceModule { }
