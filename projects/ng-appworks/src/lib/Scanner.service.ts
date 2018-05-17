import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWScanner} from 'appworks-js';
import { Observable, Observer } from 'rxjs';
import { wrapListenerWithDirtyAndDefault } from "@angular/core/src/render3/instructions";

@Injectable()
export class AWScannerService {
    AWScanner: AWScanner
    onChange: Observable<any>
    constructor() {
        this.onChange = new Observable(ob => {
            this.AWScanner = new AWScanner(data => ob.next(data), err => ob.error(err));
        });
    }

    init(ob: Observer<any>) {
        this.onChange.subscribe(ob);
    }

    scanDocument(returnType: Number, ob: Observer<any>) {
        let obs = new Observable(ob => {
            this.AWScanner.scanDocument(returnType, data => ob.next(data), err => ob.error(err));
        })
    }
}