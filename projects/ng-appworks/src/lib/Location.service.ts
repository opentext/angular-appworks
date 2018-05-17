import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWLocation} from 'appworks-js';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AWLocationService {
    AWLauncher: AWLocation
    onChange: Observable<any>
    constructor() {
        this.onChange = new Observable(ob => {
            this.AWLauncher = new AWLocation(data => ob.next(data), err => ob.error(err));
        });
    }

    init(ob: Observer<any>) {
        this.onChange.subscribe(ob);
    }

    getCurrentPosition(options?: any) {
        this.AWLauncher.getCurrentPosition(options);
    }
    
    watchPosition(options?: any) {
        return this.AWLauncher.watchPosition(options);
    }

    clearWatch(watchId: number) {
        return this.AWLauncher.clearWatch(watchId);
    }
}