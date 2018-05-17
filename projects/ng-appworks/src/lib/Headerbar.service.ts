import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWHeaderBar} from 'appworks-js';
import { Observable, Observer } from 'rxjs';
import { ContactProperties } from "appworks-js/src/plugins/contacts";
import { SaveDialogOptions, FileDialogOptions } from "appworks-js/src/plugins/file";

@Injectable()
export class AWHeaderBarService {
    AWHeaderBar: AWHeaderBar
    onChange: Observable<any>
    constructor() {
        this.onChange = new Observable((ob) => {
            this.AWHeaderBar = new AWHeaderBar(data => ob.next(data), err => ob.error(err));
        });
    }

    init(ob: Observer<any>) {
        this.onChange.subscribe(ob);
    }

    setHeader(config: any) {
        this.AWHeaderBar.setHeader(config);
    }

    getHeader() {
        return this.AWHeaderBar.getHeader();
    }

    setHeaderButtons(ob: Observer<any>, config: any) {
        let obs = new Observable(ob => {
            this.AWHeaderBar.setHeaderButtons(data => ob.next(data), config);
        });
    }

    maskHeader(shouldMaskHeader: boolean) {
        this.AWHeaderBar.maskHeader(shouldMaskHeader);
    }

}