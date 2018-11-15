import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { GoogleComponent } from './google/google.component';
import { RouterModule, Routes } from '@angular/router';
import { VectorComponent } from './vector/vector.component';
import { SharedModule } from '../../shared/shared.module';

export const MapRoutes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Map',
      status: false
    },
    children: [
      {
        path: 'google',
        component: GoogleComponent,
        data: {
          heading: 'Google Map',
          status: true
        }
      }, {
        path: 'vector',
        component: VectorComponent,
        data: {
          heading: 'Vector Map',
          status: true
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MapRoutes),
    SharedModule
  ],
  declarations: [MapComponent, GoogleComponent, VectorComponent]
})
export class MapModule { }
