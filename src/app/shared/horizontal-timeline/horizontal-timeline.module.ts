import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HorizontalTimelineComponent} from './horizontal-timeline.component';
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [HorizontalTimelineComponent],

    exports: [HorizontalTimelineComponent]
})
export class HorizontalTimelineModule { }
