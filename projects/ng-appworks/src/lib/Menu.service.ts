import {Injectable} from "@angular/core";
import {AWMenu} from 'appworks-js';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AWMenuService {
    AWMenu: AWMenu
    constructor() {
    
    }

    setMenu(sections: any[]) {
        return new Observable(ob => {
            this.AWMenu = new AWMenu(data => ob.next(data), err => ob.error(err));
            this.AWMenu.setMenu(sections);
        });
    }
}