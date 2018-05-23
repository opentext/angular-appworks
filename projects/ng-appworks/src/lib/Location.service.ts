import {Injectable} from "@angular/core";
import {AWLocation} from 'appworks-js';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AWLocationService {
    AWLocation: AWLocation
    
    constructor() {
    
    }

    attach() {
        return new Observable(ob => {
            this.AWLocation = new AWLocation(data => ob.next(data), err => ob.error(err));
        });
    }
    
    getCurrentPosition(options?: any) {
        return new Observable(ob => {
            this.AWLocation = new AWLocation(data => ob.next(data), err => ob.error(err))
            this.AWLocation.getCurrentPosition(options);
        });
    }
    
    watchPosition(options?: any) {
        return this.AWLocation.watchPosition(options);
    }

    clearWatch(watchId: number) {
        return this.AWLocation.clearWatch(watchId);
    }
}