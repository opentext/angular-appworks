import {Injectable} from "@angular/core";
import {AWCache} from 'appworks-js';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AWCacheService {
    AWCache: AWCache
    constructor() {
        this.AWCache = new AWCache();
    }

    init(option?) {
        this.AWCache = new AWCache(option);
    }

    setItem(key: string, value: any) {
        return this.AWCache.setItem(key, value);
    }

    getItem(key: string) {
        return this.AWCache.getItem(key);
    }

    removeItem(key: string) {
        return this.AWCache.removeItem(key);
    }

    clear() {
        return this.AWCache.clear();
    }


}