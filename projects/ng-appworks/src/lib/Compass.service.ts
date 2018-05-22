import {Injectable} from "@angular/core";
import {AWCompass} from 'appworks-js';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AWCompassService {
    AWCompass: AWCompass
    constructor() {
        this.AWCompass = new AWCompass(() => {}, () => {});
    }

    attach() {
        return new Observable(ob => {
            this.AWCompass = new AWCompass(data => ob.next(data), err => ob.error(err));
        });
    }

    getCurrentHeading() {
        return new Observable(ob => {
            this.AWCompass = new AWCompass(data => ob.next(data), err => ob.error(err));
            this.AWCompass.getCurrentHeading();
        });
    }

    watchHeading(options?: any) {
        return this.AWCompass.watchHeading(options);
    }

    clearWatch(watchId: number) {
        return this.AWCompass.clearWatch(watchId);
    }
}