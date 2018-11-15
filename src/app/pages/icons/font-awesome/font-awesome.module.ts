import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeComponent } from './font-awesome.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const FontawesomeRoutes: Routes = [
  {
    path: '',
    component: FontAwesomeComponent,
    data: {
      heading: 'Icons Fontawesome',
      status: false
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FontawesomeRoutes),
    SharedModule
  ],
  declarations: [FontAwesomeComponent]
})
export class FontAwesomeModule { }
