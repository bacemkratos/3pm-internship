import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import { LightboxModule } from 'angular2-lightbox';

export const GalleryRoutes: Routes = [{
  path: '',
  component: GalleryComponent,
  data: {
    heading: 'Gallery'
  }
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GalleryRoutes),
    SharedModule,
    LightboxModule
  ],
  declarations: [GalleryComponent]
})
export class GalleryModule { }
