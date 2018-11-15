import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { CalendarComponent } from './calendar.component';
import {SharedModule} from '../../shared/shared.module';
import { MwlUtilsCalendarHeaderComponent } from './mwl-utils-calendar-header/mwl-utils-calendar-header.component';

export const CalendarRoutes: Routes = [{
  path: '',
  component: CalendarComponent,
  data: {
    heading: 'Event Calendar'
  }
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CalendarRoutes),
    SharedModule
  ],
  declarations: [CalendarComponent, MwlUtilsCalendarHeaderComponent]
})
export class CalendarModule { }
