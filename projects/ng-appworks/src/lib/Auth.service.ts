import {Injectable} from "@angular/core";
import {AWAuth} from 'appworks-js';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AWAuthService {
    AWAuth: AWAuth
    constructor() {
        this.AWAuth = new AWAuth(() => {}, () => {});
    }

    authenticate(force?: boolean) {
        return new Observable(ob => {
            this.AWAuth = new AWAuth(data => ob.next(data), err => ob.error(err));
            this.authenticate(force);
        });
    }

    getAuthResponse() {
        return new Observable(ob => {
            this.AWAuth = new AWAuth(data => ob.next(data), err => ob.error(err));
            this.getAuthResponse();
        });
    }

    gateway() {
        return new Observable((ob) => {
            this.AWAuth.gateway((data) => ob.next(data), (err) => ob.next(err));
        });
    }

    online() {
        return new Observable((ob) => {
            this.AWAuth.online((ticket) => ob.next(ticket), (err) => ob.error(err));
        });
    }

    otdsssoticket() {
        return new Observable((ob) => {
            this.AWAuth.otdsssoticket((ticket) => ob.next(ticket), (err) => ob.error(err));
        });
    }
}