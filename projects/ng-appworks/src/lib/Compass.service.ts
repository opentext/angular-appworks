import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWCompass} from 'appworks-js';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AWCompassService {
    AWCompass: AWCompass
    onChange: Observable<any>
    constructor() {
        this.onChange = new Observable((ob) => {
            this.AWCompass = new AWCompass(data => ob.next(data), err => ob.error(err));
        });
    }

    init(ob: Observer<any>) {
        this.onChange.subscribe(ob);
    }

    getCurrentHeading() {
        this.AWCompass.getCurrentHeading();
    }

    watchAcceleration(options?: any) {
        return this.AWCompass.watchHeading(options);
    }

    clearWatch(watchId: number) {
        return this.AWCompass.clearWatch(watchId);
    }
}