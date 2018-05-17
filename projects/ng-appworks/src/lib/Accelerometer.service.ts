import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWAccelerometer} from 'appworks-js';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AWAccelerometerService {
    private AWAccelerometer: AWAccelerometer
    private onChange: Observable<any>
    constructor() {
        this.onChange = new Observable((ob: Observer<any>) => {
            this.AWAccelerometer = new AWAccelerometer((data) => ob.next(data), (err) => ob.error(err));
        });
    }

    init(obs: Observer<any>) {
        this.onChange.subscribe(obs);
    }

    getCurrentAcceleration() {
        return this.AWAccelerometer.getCurrentAcceleration();
    }

    watchAcceleration(options?: any): number {
        return this.AWAccelerometer.watchAcceleration(options);
    }

    clearWatch(watchId: number) {
        return this.AWAccelerometer.clearWatch(watchId);
    }

}