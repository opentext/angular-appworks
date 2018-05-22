import {Injectable} from "@angular/core";
import {AWFileTransfer} from 'appworks-js';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AWFileTransferService {
    AWFileTransfer: AWFileTransfer
    constructor() {
    }

    attach() {
        return new Observable(ob => {
            this.AWFileTransfer = new AWFileTransfer(data => ob.next(data), err => ob.error(err));
        });
    }

    download(url: string, target: string, options?: any, shared?: boolean) {
        this.AWFileTransfer.download(url, target, options, shared);
    }

    upload(source: string, url: string, options?: any, shared?: boolean) {
        this.AWFileTransfer.upload(source, url, options, shared);
    }

    progressHandler(ob: Observer<any>) {
        return new Observable(ob => {
            this.AWFileTransfer.progressHandler(data => ob.next(data));
        });
    }

    abort() {
        this.AWFileTransfer.abort();
    }





}