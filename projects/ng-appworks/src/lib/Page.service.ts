import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWPage} from 'appworks-js';
import { Observable, Observer } from 'rxjs';
import { wrapListenerWithDirtyAndDefault } from "@angular/core/src/render3/instructions";

@Injectable()
export class AWPageService {
    AWPage: AWPage
    onChange: Observable<any>
    constructor() {
        this.onChange = new Observable(ob => {
            this.AWPage = new AWPage(data => ob.next(data), err => ob.error(err));
        });
    }

    init(ob: Observer<any>) {
        this.onChange.subscribe(ob);
    }

    setPageUrl(url: string) {
        this.AWPage.setPageUrl(url);
    }

    openModalAppWebView(url: string, title: string, closetitle: string) {
        this.AWPage.openModalAppWebView(url, title, closetitle);
    }

    openModalExternalWebView(url: string, title: string, closetitle: string, options?: any) {
        this.AWPage.openModalExternalWebView(url, title, closetitle, options);
    }

    setActionButtonCallback(ob: Observer<any>, actionTitle: string) {
        let obs = new Observable(ob => {
            this.AWPage.setActionButtonCallback(data => ob.next(data), actionTitle);
        });
        obs.subscribe(ob);
    }

    closeModalAppWebView() {
        this.AWPage.closeModalAppWebView();
    }

    video(ob: Observer<any>, url: string) {
        let obs = new Observable(ob => {
            this.AWPage.video(data => ob.next(data), err => ob.error(err), url);
        });
        obs.subscribe(ob);
    }
}