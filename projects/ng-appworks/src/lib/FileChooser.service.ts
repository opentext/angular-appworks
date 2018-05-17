import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWFileChooser} from 'appworks-js';
import { Observable, Observer } from 'rxjs';
import { ContactProperties } from "appworks-js/src/plugins/contacts";

@Injectable()
export class AWFileChooserService {
    AWFileChooser: AWFileChooser
    onChange: Observable<any>
    constructor() {
        this.onChange = new Observable(ob => {
            this.AWFileChooser = new AWFileChooser(data => ob.next(data), err => ob.error(err));
        });
    }

    init(ob: Observer<any>) {
        this.onChange.subscribe(ob);
    }

    selectAndUpload(action: string) {
        this.AWFileChooser.selectAndUpload(action);
    }
}