import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {NotificationsComponent} from './notifications.component';

export const NotificationsRoutes: Routes = [
    {
        path: '',
        component: NotificationsComponent,
        data: {
            heading: 'Notifications'
        }
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(NotificationsRoutes),
        SharedModule
    ],
    declarations: [NotificationsComponent]
})
export class NotificationsModule {
}
