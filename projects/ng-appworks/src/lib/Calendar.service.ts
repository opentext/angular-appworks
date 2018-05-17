import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWCalendar} from 'appworks-js';
import { Observable, Observer } from 'rxjs';


@Injectable()
export class AWCalendarService {
    AWCalendar: any
    constructor() {
        this.AWCalendar =  new AWCalendar();
    }

}
