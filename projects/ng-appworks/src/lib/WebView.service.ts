import {Injectable} from "@angular/core";
import {AWWebView} from 'appworks-js';
import { Observable, Observer } from 'rxjs';
import { wrapListenerWithDirtyAndDefault } from "@angular/core/src/render3/instructions";

@Injectable()
export class AWWebViewService {
    AWWebView: AWWebView

    constructor() {
        this.AWWebView = new AWWebView();
    }

    init() {
    
    }

    open(url: string, target?: string, options?: string) {
        this.AWWebView.open(url, target, options);
    }

    addEventListener(type: string) {
        return new Observable(ob => {
            this.AWWebView.addEventListener(type, data => ob.next(data));
        });
    }

    removeEventListener(type: string) {
        return new Observable(ob => {
            this.AWWebView.removeEventListener(type, data => ob.next(data));
        });
    }

    show() {
        this.AWWebView.show();
    }

    close() {
        this.AWWebView.close();
    }

    executeScript(script: string) {
        return new Observable(ob => {
            this.AWWebView.executeScript(script, data => ob.next(data));
        });
    }

    insertCSS(css: string) {
        return new Observable(ob => {
            this.AWWebView.insertCSS(css, data => ob.next(data));
        });
    }
}