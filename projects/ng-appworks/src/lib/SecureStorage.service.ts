import {Injectable} from "@angular/core";
import {AWSecureStorage} from 'appworks-js';
import { Observable, Observer } from 'rxjs';
import { wrapListenerWithDirtyAndDefault } from "@angular/core/src/render3/instructions";

@Injectable()
export class AWSecureStorageService {
    AWSecureStorage: AWSecureStorage
    constructor() {
    
    }

    store(url: string, filename: string, options?: any) {
        return new Observable(ob => {
            this.AWSecureStorage = new AWSecureStorage(data => ob.next(data), err => ob.error(err));
            this.AWSecureStorage.store(url, filename, options);
        });
    }

    retrieve(filename: string, options?: any) {
        return new Observable(ob => {
            this.AWSecureStorage = new AWSecureStorage(data => ob.next(data), err => ob.error(err));
            this.AWSecureStorage.retrieve(filename, options);
        });
    }

    remove(target: string) {
        return new Observable(ob => {
            this.AWSecureStorage = new AWSecureStorage(data => ob.next(data), err => ob.error(err));
            this.AWSecureStorage.remove(target);
        });
    }

    fileExistsAtPath(target: string) {
        return new Observable(ob => {
            this.AWSecureStorage = new AWSecureStorage(data => ob.next(data), err => ob.error(err));
            this.AWSecureStorage.fileExistsAtPath(target);
        });
    }
}