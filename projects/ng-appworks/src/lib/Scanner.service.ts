import {Injectable} from "@angular/core";
import {AWScanner} from 'appworks-js';
import { Observable, Observer } from 'rxjs';
import { wrapListenerWithDirtyAndDefault } from "@angular/core/src/render3/instructions";

@Injectable()
export class AWScannerService {
    AWScanner: AWScanner

    constructor() {
        this.AWScanner = new AWScanner(() => {}, () => {});
    }

    scanDocument(returnType: Number) {
        return new Observable(ob => {
            this.AWScanner.scanDocument(returnType, data => ob.next(data), err => ob.error(err));
        });
    }
}