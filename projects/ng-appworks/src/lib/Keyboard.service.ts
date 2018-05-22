import {Injectable} from "@angular/core";
import {AWKeyboard} from 'appworks-js';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AWKeyboardService {
    AWKeyboard: AWKeyboard
    constructor() {
       this.AWKeyboard = new AWKeyboard();
    }

    init() {
    }

    hideKeyboardAccessoryBar(hide: boolean) {
        this.AWKeyboard.hideKeyboardAccessoryBar(hide);
    }

    close() {
        this.AWKeyboard.close();
    }

    show() {
        this.AWKeyboard.show();
    }

    disableScroll(disable: boolean) {
        this.AWKeyboard.disableScroll(disable);
    }
}