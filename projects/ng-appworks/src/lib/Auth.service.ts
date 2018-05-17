import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWAuth} from 'appworks-js';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AWAuthService {
    private AWAuth: AWAuth
    private onChange: Observable<any>
    constructor() {
        this.onChange = new Observable((obs) => {
            this.AWAuth = new AWAuth((data) => obs.next(data), (err) => obs.error(err));
        });
    }

    init(ob: Observer<any>) {
        this.onChange.subscribe(ob);
    }

    authenticate(force?: boolean) {
        this.AWAuth.authenticate(force);
    }

    getAuthResponse() {
        this.AWAuth.getAuthResponse();
    }

    gateway(ob: Observer<any>) {
        let gatObs = new Observable((ob) => {
            this.AWAuth.gateway((data) => ob.next(data), (err) => ob.next(err));
        });
        gatObs.subscribe(ob);
    }

    online(ob: Observer<any>) {
        let onlineObs = new Observable((ob) => {
            this.AWAuth.online((ticket) => ob.next(ticket), (err) => ob.error(err));
        });
        onlineObs.subscribe(ob);
    }
    
    otdsssoticket(ob: Observer<any>) {
        let otdObs = new Observable((ob) => {
            this.AWAuth.otdsssoticket((ticket) => ob.next(ticket), (err) => ob.error(err));
        });
        otdObs.subscribe(ob);
    }
}