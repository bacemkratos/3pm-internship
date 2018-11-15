import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../../services/notification.service';

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
    public notifications: any;

    constructor(private notificationService: NotificationService) {
    }

    ngOnInit() {
        this.notificationService.getNotifications().subscribe((data: any) => {
            this.notifications = data.data.allNotifications;
        });
    }

}
