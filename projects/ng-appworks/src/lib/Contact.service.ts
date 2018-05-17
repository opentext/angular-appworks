import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWContacts} from 'appworks-js';
import { Observable, Observer } from 'rxjs';
import { ContactProperties } from "appworks-js/src/plugins/contacts";

@Injectable()
export class AWContactsService {
    AWContacts: AWContacts
    onChange: Observable<any>
    constructor() {
        this.onChange = new Observable((ob) => {
            this.AWContacts = new AWContacts((data) => ob.next(data), (err) => ob.error(err));
        });
    }

    init(ob: Observer<any>) {
        this.onChange.subscribe(ob);
    }

    create(properties?: ContactProperties) {
        return this.AWContacts.create(properties);
    }

    find(contactFields: string[], options?: any) {
        return this.AWContacts.find(contactFields, options);
    }

    pickContact() {
        return this.AWContacts.pickContact();
    }

}