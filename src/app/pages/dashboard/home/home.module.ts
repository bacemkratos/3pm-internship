import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule, Routes} from '@angular/router';
import {DashboardModernComponent} from '../dashboard-modern/dashboard-modern.component';
import {SharedModule} from '../../../shared/shared.module';

export const ModernRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      heading: 'Home'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ModernRoutes),
    SharedModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
