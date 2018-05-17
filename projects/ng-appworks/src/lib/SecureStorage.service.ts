import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWSecureStorage} from 'appworks-js';
import { Observable, Observer } from 'rxjs';
import { wrapListenerWithDirtyAndDefault } from "@angular/core/src/render3/instructions";

@Injectable()
export class AWSecureStorageService {
    AWSecureStorage: AWSecureStorage
    onChange: Observable<any>
    constructor() {
        this.onChange = new Observable(ob => {
            this.AWSecureStorage = new AWSecureStorage(data => ob.next(data), err => ob.error(err));
        });
    }

    init(ob: Observer<any>) {
        this.onChange.subscribe(ob);
    }

    store(url: string, filename: string, options?: any) {
        this.AWSecureStorage.store(url, filename, options);
    }

    retrieve(filename: string, options?: any) {
        this.AWSecureStorage.retrieve(filename, options);
    }

    remove(target: string) {
        this.AWSecureStorage.remove(target);
    }

    fileExistsAtPath(target: string) {
        this.AWSecureStorage.fileExistsAtPath(target);
    }
}