import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

export const InboxRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'mail-box',
        loadChildren: './mail-box/mail-box.module#MailBoxModule',
        data: {
          heading: 'Mail Box'
        }
      },
      {
        path: 'mail-details',
        loadChildren: './mail-details/mail-details.module#MailDetailsModule',
        data: {
          heading: 'Mail Details'
        }
      },
      {
        path: 'compose-mail',
        loadChildren: './compose-mail/compose-mail.module#ComposeMailModule',
        data: {
          heading: 'Compose Mail'
        }
      },
      {
        path: 'contact',
        loadChildren: './contact/contact.module#ContactModule',
        data: {
          heading: 'Contact'
        }
      },
      {
        path: 'contact-detail',
        loadChildren: './contact-detail/contact-detail.module#ContactDetailModule',
        data: {
          heading: 'Contact Detail'
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(InboxRoutes)
  ],
  declarations: []
})
export class InboxModule { }
