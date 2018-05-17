import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWAppManager} from 'appworks-js';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AWAppManagerService {
    AWAppManager:AWAppManager
    onChange: Observable<any>

    constructor() {
        this.onChange = new Observable((obs) => {
            this.AWAppManager = new AWAppManager((data) => obs.next(data), (err) => obs.error(err));
        });
    }

    init(ob: Observer<any>) {
        this.onChange.subscribe(ob);
    }

    colseActiveApp() {
        this.AWAppManager.closeActiveApp();
    }
}