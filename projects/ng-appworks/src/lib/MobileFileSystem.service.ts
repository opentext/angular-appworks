import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWMobileFileSystem} from 'appworks-js';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AWMobileFileSystemService {
    AWMobileFileSystem: AWMobileFileSystem
    constructor() {

    }

    list(directory: string, shared: boolean) {
        return new Observable(ob => {
            this.AWMobileFileSystem.list(directory, shared, data => ob.next(data), err => ob.error(err));
        });
    }

    exists(src: string, shared: boolean) {
        return new Observable(ob => {
            this.AWMobileFileSystem.exists(src, shared, data => ob.next(data), err => ob.error(err));
        });
    }

    rename(src: string, destination: string, shared: boolean) {
        return new Observable(ob => {
            this.AWMobileFileSystem.rename(src, destination, shared, data => ob.next(data), err => ob.error(err));
        });
    }

    copy(src: string, shared: boolean, destination: string, destinationShared: boolean) {
        return new Observable(ob => {
            this.AWMobileFileSystem.copy(src, shared, destination, destinationShared, data => ob.next(data), err => ob.error(err));
        });
    }

    move(src: string, shared: boolean, destination: string, destinationShared: boolean) {
        return new Observable(ob => {
            this.AWMobileFileSystem.move(src, shared, destination, destinationShared, data => ob.next(data), err => ob.error(err));
        });
    }

    remove(src: string, shared: boolean) {
        return new Observable(ob => {
            this.AWMobileFileSystem.remove(src, shared, data => ob.next(data), err => ob.error(err));
        });
    }

    listImports() {
        return new Observable(ob => {
            this.AWMobileFileSystem.listImports(data => ob.next(data), err => ob.error(err));
        });
    }

    moveImport(src: string, destination: string, shared: boolean) {
        return new Observable(ob => {
            this.AWMobileFileSystem.moveImport(src, destination, shared, data => ob.next(data), err => ob.error(err));
        });
    }

    open(src: string, shared: boolean) {
        return new Observable(ob => {
            this.AWMobileFileSystem.open(src, shared, data => ob.next(data), err => ob.error(err));
        });
    }

    share(src: string, shared: boolean) {
        return new Observable(ob => {
            this.AWMobileFileSystem.share(src, shared, data => ob.next(data), err => ob.error(err));
        });
    }

    quicklook(src: string, shared: boolean) {
        return new Observable(ob => {
            this.AWMobileFileSystem.quicklook(src, shared, data => ob.next(data), err => ob.error(err));
        });
    }

    download(source: string, destination: string, headers: any, shared: boolean) {
        return new Observable(ob => {
            this.AWMobileFileSystem.download(source, destination, headers, shared, data => ob.next(data), err => ob.error(err));
        });
    }

    upload(source: string, destination: string, fileParameterName: string, formData: any, headers: any, shared: boolean) {
        return new Observable(ob => {
            this.AWMobileFileSystem.upload(source, destination, fileParameterName, formData, headers, shared, data => ob.next(data), err => ob.error(err));
        });
    }
}