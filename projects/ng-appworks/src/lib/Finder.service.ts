import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWFinder} from 'appworks-js';
import { Observable, Observer } from 'rxjs';
import { ContactProperties } from "appworks-js/src/plugins/contacts";
import { SaveDialogOptions, FileDialogOptions } from "appworks-js/src/plugins/file";

@Injectable()
export class AWFinderService {
    AWFinder: AWFinder

    constructor() {
    }

    open(path: string, filename: string) {
        return new Observable(ob => {
            this.AWFinder = new AWFinder(data => ob.next(data), err => ob.error(err));
            this.AWFinder.open(path, filename);
        });
    }

    share(filename: string) {
        return new Observable(ob => {
            this.AWFinder = new AWFinder(data => ob.next(data), err => ob.error(err));
            this.AWFinder.share(filename);
        });
    }

    list(filename: string) {
        return new Observable(ob => {
            this.AWFinder = new AWFinder(data => ob.next(data), err => ob.error(err));
            this.AWFinder.list(filename);
        });
    }
}