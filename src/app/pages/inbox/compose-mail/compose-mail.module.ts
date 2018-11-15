import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComposeMailComponent } from './compose-mail.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const ComposeMailRoutes: Routes = [
  {
    path: '',
    component: ComposeMailComponent,
    data: {
      heading: 'Compose Mail'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComposeMailRoutes),
    SharedModule
  ],
  declarations: [ComposeMailComponent]
})
export class ComposeMailModule { }
