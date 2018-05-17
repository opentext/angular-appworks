import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWQRReader} from 'appworks-js';
import { Observable, Observer } from 'rxjs';
import { wrapListenerWithDirtyAndDefault } from "@angular/core/src/render3/instructions";

@Injectable()
export class AWQRReaderService {
    AWQRReader: AWQRReader
    onChange: Observable<any>
    constructor() {
        this.onChange = new Observable(ob => {
            this.AWQRReader = new AWQRReader(data => ob.next(data), err => ob.error(err));
        });
    }

    init(ob: Observer<any>) {
        this.onChange.subscribe(ob);
    }

    scan() {
        this.AWQRReader.scan();
    }   
}