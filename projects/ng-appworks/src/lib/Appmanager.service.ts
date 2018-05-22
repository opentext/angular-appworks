import {Injectable} from "@angular/core";
import {AWAppManager} from 'appworks-js';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AWAppManagerService {
    AWAppManager:AWAppManager

    constructor() {
    }

    closeActiveApp() {
        return new Observable(ob => {
            this.AWAppManager = new AWAppManager(data => ob.next(data), err => ob.error(err));
            this.AWAppManager.closeActiveApp();
        });
    }
}