import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWVibration} from 'appworks-js';
import { Observable, Observer } from 'rxjs';
import { wrapListenerWithDirtyAndDefault } from "@angular/core/src/render3/instructions";

@Injectable()
export class AWVibrationService {
    AWVibration: AWVibration
    onChange: Observable<any>
    constructor() {
        this.AWVibration = new AWVibration();
    }

    init() {
    
    }

    vibrate(time: number) {
        this.AWVibration.vibrate(time);
    }
}