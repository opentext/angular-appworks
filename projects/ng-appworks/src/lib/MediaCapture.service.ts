import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWMediaCapture} from 'appworks-js';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AWMediaCaptureService {
    AWMediaCapture: AWMediaCapture
    onChange: Observable<any>
    constructor() {
        this.onChange = new Observable(ob => {
            this.AWMediaCapture = new AWMediaCapture(data => ob.next(data), err => ob.error(err));
        });
    }

    init(ob: Observer<any>) {
        this.onChange.subscribe(ob);
    }

    captureAudio(options?: any) {
        this.AWMediaCapture.captureAudio(options);
    }

    captureImage(options?: any) {
        this.AWMediaCapture.captureImage(options);
    }

    captureVideo(options?: any) {
        this.AWMediaCapture.captureVideo(options);
    }
}