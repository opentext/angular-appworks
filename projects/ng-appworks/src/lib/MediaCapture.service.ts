import {Injectable} from "@angular/core";
import {AWMediaCapture} from 'appworks-js';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AWMediaCaptureService {
    AWMediaCapture: AWMediaCapture
    constructor() {
    }

    captureAudio(options?: any) {
        return new Observable(ob => {
            this.AWMediaCapture = new AWMediaCapture(data => ob.next(data), err => ob.error(err))
            this.AWMediaCapture.captureAudio(options);
        });
    }

    captureImage(options?: any) {
        return new Observable(ob => {
            this.AWMediaCapture = new AWMediaCapture(data => ob.next(data), err => ob.error(err))
            this.AWMediaCapture.captureImage(options);
        });
    }

    captureVideo(options?: any) {
        return new Observable(ob => {
            this.AWMediaCapture = new AWMediaCapture(data => ob.next(data), err => ob.error(err))
            this.AWMediaCapture.captureVideo(options);
        });
    }
}