import {Injectable} from "@angular/core";
import {AWFinder} from 'appworks-js';
import { Observable, Observer } from 'rxjs';

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