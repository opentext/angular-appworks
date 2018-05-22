import {Injectable} from "@angular/core";
import {AWHeaderBar} from 'appworks-js';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AWHeaderBarService {
    AWHeaderBar: AWHeaderBar

    constructor() {
    
    }

    setHeader(config: any) {
        return new Observable(ob => {
            this.AWHeaderBar = new AWHeaderBar(data => ob.next(data), err => ob.next(err));
            this.AWHeaderBar.setHeader(config);
        });
    }

    getHeader() {
        return new Observable(ob => {
            this.AWHeaderBar = new AWHeaderBar(data => ob.next(data), err => ob.next(err));
            return this.AWHeaderBar.getHeader();
        });
    }

    setHeaderButtons(config: any) {
        return new Observable(ob => {
            this.AWHeaderBar.setHeaderButtons(data => ob.next(data), config);
        });
    }

    maskHeader(shouldMaskHeader: boolean) {
        this.AWHeaderBar.maskHeader(shouldMaskHeader);
    }

}