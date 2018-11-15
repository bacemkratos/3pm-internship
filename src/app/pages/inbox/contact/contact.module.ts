import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const ContactRoutes: Routes = [
  {
    path: '',
    component: ContactComponent,
    data: {
      heading: 'Contact'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ContactRoutes),
    SharedModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
