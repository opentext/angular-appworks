import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWAccelerometer} from 'appworks-js';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AWAccelerometerService {
    AWAccelerometer: AWAccelerometer
    constructor() {
    }

    attach() {
        return new Observable(ob => {
            this.AWAccelerometer = new AWAccelerometer(data => ob.next(data), err => ob.error(err));
        });
    }

    getCurrentAcceleration(): Observable<any> {
        return new Observable(ob => {
            this.AWAccelerometer = new AWAccelerometer(data => ob.next(data), err => ob.error(err));
        });
    }

    watchAcceleration(options?: any): Observable<any> {
        return this.AWAccelerometer.watchAcceleration(options);
    }

    clearWatch(watchId: number) {
        return this.AWAccelerometer.clearWatch(watchId);
    }

}