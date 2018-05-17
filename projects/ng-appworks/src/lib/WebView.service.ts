import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWWebView} from 'appworks-js';
import { Observable, Observer } from 'rxjs';
import { wrapListenerWithDirtyAndDefault } from "@angular/core/src/render3/instructions";

@Injectable()
export class AWWebViewService {
    AWWebView: AWWebView
    onChange: Observable<any>
    constructor() {
        this.AWWebView = new AWWebView();
    }

    init() {
    
    }

    open(url: string, target?: string, options?: string) {
        this.AWWebView.open(url, target, options);
    }

    addEventListener(type: string, ob: Observer<any>) {
        let obs = new Observable(ob => {
            this.AWWebView.addEventListener(type, data => ob.next(data));
        });
        obs.subscribe(ob);
    }

    removeEventListener(type: string, ob: Observer<any>) {
        let obs = new Observable(ob => {
            this.AWWebView.removeEventListener(type, data => ob.next(data));
        });
        obs.subscribe(ob);
    }

    show() {
        this.AWWebView.show();
    }

    close() {
        this.AWWebView.close();
    }

    executeScript(script: string, ob: Observer<any>) {
        let obs = new Observable(ob => {
            this.AWWebView.executeScript(script, data => ob.next(data));
        });
        obs.subscribe(ob);
    }

    insertCSS(css: string, ob: Observer<any>) {
        let obs = new Observable(ob => {
            this.AWWebView.insertCSS(css, data => ob.next(data));
        });
        obs.subscribe(ob);
    }
}