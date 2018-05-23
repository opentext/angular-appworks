import {Injectable} from "@angular/core";
import {AWOfflineManager} from 'appworks-js';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AWOfflineManagerService {
    AWOfflineManager: AWOfflineManager
    constructor() {
        this.AWOfflineManager = new AWOfflineManager();
    }

    init(options) {
        this.AWOfflineManager = new AWOfflineManager(options);
    }

    defer(eventName: string, args: any) {
        this.AWOfflineManager.defer(eventName, args);
    }

    cancel(id: number){ 
        this.AWOfflineManager.cancel(id);
    }

    networkStatus() {
        return this.AWOfflineManager.networkStatus();
    }
}