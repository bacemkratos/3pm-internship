import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerComponent } from './spinner/spinner.component';
import { MenuItems } from './menu-items/menu-items';
import { ClickOutsideModule } from 'ng-click-outside';
import { AccordionAnchorDirective } from './accordion/accordionanchor.directive';
import { AccordionLinkDirective } from './accordion/accordionlink.directive';
import { AccordionDirective } from './accordion/accordion.directive';
import { ScrollModule } from './scroll/scroll.module';
import { CalendarModule } from 'angular-calendar';
import { AgmCoreModule } from '@agm/core';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { TagInputModule } from 'ngx-chips';
import { AnimatorModule } from 'css-animator';
import { TitleComponent } from '../layout/admin/title/title.component';
import { DataTableModule } from 'angular2-datatable';
import { DataFilterPipe } from './data-table/data-filter.pipe';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SelectModule } from 'ng-select';
import { SelectOptionService } from './select-2/select-option.service';
import { UiSwitchModule } from 'ng2-ui-switch';
import { FileUploadModule } from 'ng2-file-upload';
import { ColorPickerModule } from 'ngx-color-picker';
import { DatepickerModule } from 'angular2-material-datepicker';
import {ChartistModule} from 'ng-chartist';
import {QuillEditorModule} from 'ngx-quill-editor';
import {HorizontalTimelineModule} from "./horizontal-timeline/horizontal-timeline.module";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    ClickOutsideModule,
    ScrollModule,
    CalendarModule.forRoot(),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk'}),
    DragAndDropModule,
    TagInputModule,
    AnimatorModule,
    DataTableModule,
    NgxDatatableModule,
    SelectModule,
    UiSwitchModule,
    FileUploadModule,
    ColorPickerModule,
    DatepickerModule,
    ChartistModule,
    QuillEditorModule,
    HorizontalTimelineModule
  ],
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    SpinnerComponent,
    TitleComponent,
    DataFilterPipe
  ],
  exports: [
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    SpinnerComponent,
    TitleComponent,
    ClickOutsideModule,
    ScrollModule,
    CalendarModule,
    AgmCoreModule,
    DragAndDropModule,
    TagInputModule,
    AnimatorModule,
    DataTableModule,
    DataFilterPipe,
    NgxDatatableModule,
    SelectModule,
    UiSwitchModule,
    FileUploadModule,
    ColorPickerModule,
    DatepickerModule,
    ChartistModule,
    QuillEditorModule,
    HorizontalTimelineModule
  ],
  providers: [
    MenuItems,
    SelectOptionService
  ]
})
export class SharedModule { }
