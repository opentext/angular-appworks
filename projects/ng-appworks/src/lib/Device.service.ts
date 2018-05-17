import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWDevice} from 'appworks-js';
import { Observable, Observer } from 'rxjs';
import { ContactProperties } from "appworks-js/src/plugins/contacts";

@Injectable()
export class AWContactsService {
    AWDevice: AWDevice
    constructor() {
        this.AWDevice = new AWDevice();
    }
    getDeviceInfo() {
        return this.AWDevice;
    }
}