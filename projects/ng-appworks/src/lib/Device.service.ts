import {Injectable} from "@angular/core";
import {AWDevice} from 'appworks-js';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AWDeviceService {
    AWDevice: AWDevice
    constructor() {
        this.AWDevice = new AWDevice();
    }
    getDeviceInfo() {
        return this.AWDevice;
    }
}