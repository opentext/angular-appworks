import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWFileTransfer} from 'appworks-js';
import { Observable, Observer } from 'rxjs';
import { ContactProperties } from "appworks-js/src/plugins/contacts";
import { SaveDialogOptions, FileDialogOptions } from "appworks-js/src/plugins/file";

@Injectable()
export class AWFileSystemService {
    AWFileTransfer: AWFileTransfer
    onChange: Observable<any>
    constructor() {
        this.onChange = new Observable((ob) => {
            this.AWFileTransfer = new AWFileTransfer(data => ob.next(data), err => ob.error(err));
        });
    }

    init(ob: Observer<any>) {
        this.onChange.subscribe(ob);
    }

    download(url: string, target: string, options?: any, shared?: boolean) {
        return this.AWFileTransfer.download(url, target, options, shared);
    }

    upload(source: string, url: string, options?: any, shared?: boolean) {
        return this.AWFileTransfer.upload(source, url, options, shared);
    }

    progressHandler(ob: Observer<any>) {
        let obs = new Observable(ob => {
            this.AWFileTransfer.progressHandler(data => ob.next(data));
        });
        obs.subscribe(ob)
    }

    abort() {
        return this.AWFileTransfer.abort();
    }





}