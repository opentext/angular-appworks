import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWContacts} from 'appworks-js';
import { Observable, Observer } from 'rxjs';
import { ContactProperties } from "appworks-js/src/plugins/contacts";

@Injectable()
export class AWContactsService {
    AWContacts: AWContacts
    constructor() {
    }

    create(properties?: ContactProperties) {
        return new Observable(ob => {
            this.AWContacts = new AWContacts(data => ob.next(data), err => ob.error(err));
            this.AWContacts.create(properties);
        });
    }

    find(contactFields: string[], options?: any) {
        return new Observable(ob => {
            this.AWContacts = new AWContacts(data => ob.next(data), err => ob.error(err));
            this.AWContacts.find(contactFields, options);
        });
    }

    pickContact() {
        return new Observable(ob => {
            this.AWContacts = new AWContacts(data => ob.next(data), err => ob.error(err));
            this.AWContacts.pickContact();
        });
    }

}