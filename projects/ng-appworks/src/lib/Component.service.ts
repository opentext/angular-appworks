import {Injectable} from "@angular/core";
import {AWComponent} from 'appworks-js';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AWComponentService {
    AWComponent: AWComponent
    constructor() {
        this.AWComponent = new AWComponent(() => {}, () => {});
    }

    open(ob: Observer<any>, args?: any[]) {
        return new Observable(ob => {
            this.AWComponent.open(data => ob.next(data), err => ob.error(err), args);
        });
    }

    list(args?: any[]) {
        return new Observable(ob => {
            this.AWComponent.list(data => ob.next(data), err => ob.error(err), args);
        });
    }

    check(args?: any[]) {
        return new Observable((ob) => {
            this.AWComponent.check(data => ob.next(data), err => ob.error(err), args);
        });
    }

    close(args?: any[]) {
        return new Observable((ob) => {
            this.AWComponent.close(data => ob.next(data), err => ob.error(err), args);
        });
    }
}