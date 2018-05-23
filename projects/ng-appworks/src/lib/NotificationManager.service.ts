import {Injectable} from "@angular/core";
import {AWNotificationManager} from 'appworks-js';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AWNotificationManagerService {
    AWNotificationManager: AWNotificationManager
    constructor() {
        this.AWNotificationManager = new AWNotificationManager();
    }

    init() {
    
    }

    enablePushNotifications(includeSeqNo: boolean) {
        return new Observable(ob => {
            this.AWNotificationManager.enablePushNotifications(data => ob.next(data), err => ob.error(err), includeSeqNo);
        });
    }

    getNotifications(includeSeqNo: boolean) {
        return new Observable(ob => {
            this.AWNotificationManager.getNotifications(data => ob.next(data), err => ob.error(err), includeSeqNo);
        });
    }

    disablePushNotifications() {
        this.AWNotificationManager.disablePushNotifications();
    }

    getOpeningNotification(includeSeqNo: boolean) {
        return new Observable(ob => {
            this.AWNotificationManager.getOpeningNotification(data => ob.next(data), err => ob.error(err), includeSeqNo);
        });
    }

    removeNotification(seqNo: any) {
        return new Observable(ob => {
            this.AWNotificationManager.removeNotification(seqNo, data => ob.next(data), err => ob.error(err));
        });
    }

    openListener(includeSeqNo: boolean) {
        return new Observable(ob => {
            this.AWNotificationManager.openListener(data => ob.next(data), err => ob.error(err), includeSeqNo);
        });
    }
}