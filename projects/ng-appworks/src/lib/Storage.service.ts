import {Injectable} from "@angular/core";
import {AWStorage} from 'appworks-js';
import { Observable, Observer } from 'rxjs';
import { wrapListenerWithDirtyAndDefault } from "@angular/core/src/render3/instructions";

@Injectable()
export class AWStorageService {
    AWStorage: AWStorage
    
    constructor() {
        this.AWStorage = new AWStorage();
    }

    init() {
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