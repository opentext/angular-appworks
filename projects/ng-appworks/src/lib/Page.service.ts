import {Injectable} from "@angular/core";
import {AWPage} from 'appworks-js';
import { Observable, Observer } from 'rxjs';
import { wrapListenerWithDirtyAndDefault } from "@angular/core/src/render3/instructions";

@Injectable()
export class AWPageService {
    AWPage: AWPage
    constructor() {
    }

    setPageUrl(url: string) {
        return new Observable(ob => {
            this.AWPage = new AWPage(data => ob.next(data), err => ob.error(err));
            this.AWPage.setPageUrl(url);
        });
    }

    openModalAppWebView(url: string, title: string, closetitle: string) {
        return new Observable(ob => {
            this.AWPage = new AWPage(data => ob.next(data), err => ob.error(err));
            this.AWPage.openModalAppWebView(url, title, closetitle);
        });
    }

    openModalExternalWebView(url: string, title: string, closetitle: string, options?: any) {
        return new Observable(ob => {
            this.AWPage = new AWPage(data => ob.next(data), err => ob.error(err));
            this.AWPage.openModalExternalWebView(url, title, closetitle, options);
        });
    }

    setActionButtonCallback(actionTitle: string) {
        return new Observable(ob => {
            this.AWPage.setActionButtonCallback(data => ob.next(data), actionTitle);
        });
    }

    closeModalAppWebView() {
        return new Observable(ob => {
            this.AWPage = new AWPage(data => ob.next(data), err => ob.error(err));
            this.AWPage.closeModalAppWebView();            
        });
    }

    video(url: string) {
        return new Observable(ob => {
            this.AWPage.video(data => ob.next(data), err => ob.error(err), url);
        });
    }
}