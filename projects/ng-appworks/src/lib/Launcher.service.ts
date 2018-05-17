import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWLauncher} from 'appworks-js';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AWLauncherService {
    AWLauncher: AWLauncher
    constructor() {
       this.AWLauncher = new AWLauncher();
    }

    init() {
    }

    getLaunchURL() {
        return new Observable(ob => {
            this.AWLauncher.getLaunchURL(data => ob.next(data), err => ob.error(err));
        });
    }

    clearLanuchUrl(){
        this.AWLauncher.clearLaunchURL();
    }
}