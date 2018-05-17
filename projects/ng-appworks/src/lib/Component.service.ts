import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWComponent} from 'appworks-js';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AWCompassService {
    AWComponent: AWComponent
    onChange: Observable<any>
    constructor() {
        this.onChange = new Observable((ob) => {
            this.AWComponent = new AWComponent((data) => ob.next(data), (err) => ob.error(err));
        });
    }

    open(ob: Observer<any>, args?: any[]) {
        let opObs = new Observable(ob => {
            this.AWComponent.open(data => ob.next(data), err => ob.error(err), args);
        });
        opObs.subscribe(ob);
    }

    list(ob: Observer<any>, args?: any[]) {
        let listObs = new Observable(ob => {
            this.AWComponent.list(data => ob.next(data), err => ob.error(err), args);
        });
        listObs.subscribe(ob);
    }

    check(ob: Observer<any>, args?: any[]) {
        let checkObs = new Observable((ob) => {
            this.AWComponent.check(data => ob.next(data), err => ob.error(err), args);
        });
        checkObs.subscribe(ob);
    }

    close(ob: Observer<any>, args?: any[]) {
        let closeObs = new Observable((ob) => {
            this.AWComponent.close(data => ob.next(data), err => ob.error(err), args);
        });
        closeObs.subscribe(ob);
    }

}