import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

export const UIElementRoutes: Routes = [
  {
    path: '',
    data: {
      heading: 'Panels and Wells'
    },
    children: [
      {
        path: 'wells',
        loadChildren: './wells/wells.module#WellsModule'
      },
      {
        path: 'block-ui',
        loadChildren: './block-ui/block-ui.module#BlockUiModule'
      },
      {
        path: 'buttons',
        loadChildren: './buttons/buttons.module#ButtonsModule'
      },
      {
        path: 'tabs',
        loadChildren: './tabs/tabs.module#TabsModule'
      },
      {
        path: 'modals',
        loadChildren: './modals/modals.module#ModalsModule'
      },
      {
        path: 'progress-bars',
        loadChildren: './progress-bars/progress-bars.module#ProgressBarsModule'
      },
      {
        path: 'notification',
        loadChildren: './notification/notification.module#NotificationModule'
      },
      {
        path: 'carousel',
        loadChildren: './carousel/carousel.module#CarouselModule'
      },
      {
        path: 'user-cards',
        loadChildren: './user-cards/user-cards.module#UserCardsModule'
      },
      {
        path: 'timeline',
        loadChildren: './timeline/timeline.module#TimelineModule'
      },
      {
        path: 'horizontal-timeline',
        loadChildren: './timeline-horizontal/timeline-horizontal.module#TimelineHorizontalModule'
      },
      {
        path: 'rang-slider',
        loadChildren: './rang-slider/rang-slider.module#RangSliderModule'
      },
      {
        path: 'ribbons',
        loadChildren: './ribbons/ribbons.module#RibbonsModule'
      },
      {
        path: 'steps',
        loadChildren: './steps/steps.module#StepsModule'
      },
      {
        path: 'bootstrap-ui',
        loadChildren: './bootstrap-ui/bootstrap-ui.module#BootstrapUiModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UIElementRoutes)
  ],
  declarations: []
})
export class UiElementModule { }
