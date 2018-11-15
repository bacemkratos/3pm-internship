import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDetailComponent } from './contact-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const ContactDetailsRoutes: Routes = [
  {
    path: '',
    component: ContactDetailComponent,
    data: {
      heading: 'Contact Detail'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ContactDetailsRoutes),
    SharedModule
  ],
  declarations: [ContactDetailComponent]
})
export class ContactDetailModule { }
