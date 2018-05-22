import {Injectable} from "@angular/core";
import {AWFileChooser} from 'appworks-js';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AWFileChooserService {
    AWFileChooser: AWFileChooser
    constructor() {

    }

    selectAndUpload(action: string) {
        return new Observable(ob => {
            this.AWFileChooser = new AWFileChooser(data => ob.next(data), err => ob.error(err));
            this.AWFileChooser.selectAndUpload(action);
        });
    }
}