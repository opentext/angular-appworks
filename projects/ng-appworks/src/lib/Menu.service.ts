import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWMenu} from 'appworks-js';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AWMenuService {
    AWMenu: AWMenu
    onChange: Observable<any>
    constructor() {
        this.onChange = new Observable(ob => {
            this.AWMenu = new AWMenu(data => ob.next(data), err => ob.error(err));
        });
    }

    init(ob: Observer<any>) {
        this.onChange.subscribe(ob);
    }

    setMenu(sections: any[]) {
        this.AWMenu.setMenu(sections);
    }
}