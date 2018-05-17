import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWGlobalization} from 'appworks-js';
import { Observable, Observer } from 'rxjs';
import { ContactProperties } from "appworks-js/src/plugins/contacts";
import { SaveDialogOptions, FileDialogOptions } from "appworks-js/src/plugins/file";

@Injectable()
export class AWGlobalizationService {
    AWGlobalization: AWGlobalization
    onChange: Observable<any>
    constructor() {
        this.AWGlobalization = new AWGlobalization();
    }

    getPreferredLanguage(ob: Observer<any>) {
        let obs = new Observable(ob => {
            this.AWGlobalization.getPreferredLanguage(data => ob.next(data), err => ob.error(err));
        });
    }
}