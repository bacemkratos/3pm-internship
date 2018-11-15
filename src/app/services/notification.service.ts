import {Injectable} from '@angular/core';
import {Notification} from '../models/Notification';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class NotificationService {
    constructor(private apollo: Apollo) {
    }

/*    getAllTerms(){

        const quer = gql` query  da($pid:Int ) {
    allTermByProject(projectId:$pid) { id
    description ,amount ,estimatedDate
  }
}` ;
        return  this.apollo.query({
            query: quer,
            variables: {
                pid: this.projectId
            }
        }) ;
    }*/

    getNotifications(notSeen = false) {
      this.apollo.getClient().queryDeduplication = true ;
        this.apollo.getClient().resetStore();
        if (notSeen) {
            return this.apollo.query({query: gql`{allNotifications(seen:false) {id,date,title,message,projectId,author,seen}}`});
        }
        return this.apollo.query({query: gql`{allNotifications {id,date,title,message,projectId,author,seen}}`});
    }

    readNotifications(notifications: number[]) {
        const quer = gql`mutation edit($notifications:Int){readNotifications(
                          notifications:$notifications)
                            { id} }`;
        return this.apollo.mutate({
            mutation: quer,
            variables: {
                notifications: notifications
            }
        });
    }

    addNotification(notification: Notification) {
        const quer = gql`mutation add($title:String, $message:String, $projectId:Int, $recipients: String, $groups: String){addNotification(
                          title:$title,
                          message:$message,
                          projectId:$projectId,
                          recipients:$recipients,
                          groups:$groups)
                            { id} }`;
        return this.apollo.mutate({
            mutation: quer,
            variables: {
                title: notification.title,
                message: notification.message,
                projectId: notification.projectId,
                recipients: notification.recipients,
                groups: notification.groups
            }
        });
    }
}
