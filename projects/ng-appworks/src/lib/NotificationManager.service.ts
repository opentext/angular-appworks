import {EventEmitter, Inject, Injectable} from "@angular/core";
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

    enablePushNotifications(ob: Observer<any>, includeSeqNo: boolean) {
        let obs = new Observable(ob => {
            this.AWNotificationManager.enablePushNotifications(data => ob.next(data), err => ob.error(err), includeSeqNo);
        });
        obs.subscribe(ob);
    }

    getNotifications(ob: Observer<any>, includeSeqNo: boolean) {
        let obs = new Observable(ob => {
            this.AWNotificationManager.getNotifications(data => ob.next(data), err => ob.error(err), includeSeqNo);
        });
        obs.subscribe(ob);
    }

    disablePushNotifications() {
        this.AWNotificationManager.disablePushNotifications();
    }

    getOpeningNotification(ob: Observer<any>, includeSeqNo: boolean) {
        let obs = new Observable(ob => {
            this.AWNotificationManager.getOpeningNotification(data => ob.next(data), err => ob.error(err), includeSeqNo);
        });
        obs.subscribe(ob);
    }

    removeNotification(seqNo: any, ob: Observer<any>) {
        let obs = new Observable(ob => {
            this.AWNotificationManager.removeNotification(seqNo, data => ob.next(data), err => ob.error(err));
        });
        obs.subscribe(ob);
    }

    openListener(ob: Observer<any>, includeSeqNo: boolean) {
        let obs = new Observable(ob => {
            this.AWNotificationManager.openListener(data => ob.next(data), err => ob.error(err), includeSeqNo);
        });
        obs.subscribe(ob);
    }
}