import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWStorage} from 'appworks-js';
import { Observable, Observer } from 'rxjs';
import { wrapListenerWithDirtyAndDefault } from "@angular/core/src/render3/instructions";

@Injectable()
export class AWStorageServiceService {
    AWStorage: AWStorage
    onChange: Observable<any>
    constructor() {
        this.AWStorage = new AWStorage();
    }

    init(ob: Observer<any>) {
        this.onChange.subscribe(ob);
    }

    clear() {
        this.AWStorage.clear();
    }

    getItem(key: string) {
        return this.AWStorage.getItem(key);
    }

    key(index: number) {
        return this.AWStorage.key(index);
    }

    removeItem(target: string) {
        this.AWStorage.removeItem(target);
    }

    setItem(key: string, data: any) {
        return this.AWStorage.setItem(key, data);
    }
}