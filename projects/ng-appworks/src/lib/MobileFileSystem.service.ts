import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWMobileFileSystem} from 'appworks-js';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AWMobileFileSystemService {
    AWMobileFileSystem: AWMobileFileSystem
    onChange: Observable<any>
    constructor() {
        this.onChange = new Observable(ob => {
            this.AWMobileFileSystem = new AWMobileFileSystem(data => ob.next(data), err => ob.error(err));
        });
    }

    init(ob: Observer<any>) {
        this.onChange.subscribe(ob);
    }

    list(directory: string, shared: boolean, ob: Observer<any>) {
        let obs = new Observable(ob => {
            this.AWMobileFileSystem.list(directory, shared, data => ob.next(data), err => ob.error(err));
        });
        obs.subscribe(ob);
    }

    exists(src: string, shared: boolean, ob: Observer<any>) {
        let obs = new Observable(ob => {
            this.AWMobileFileSystem.exists(src, shared, data => ob.next(data), err => ob.error(err));
        });
        obs.subscribe(ob);
    }

    rename(src: string, destination: string, shared: boolean, ob: Observer<any>) {
        let obs = new Observable(ob => {
            this.AWMobileFileSystem.rename(src, destination, shared, data => ob.next(data), err => ob.error(err));
        });
        obs.subscribe(ob);
    }

    copy(src: string, shared: boolean, destination: string, destinationShared: boolean, ob: Observer<any>) {
        let obs = new Observable(ob => {
            this.AWMobileFileSystem.copy(src, shared, destination, destinationShared, data => ob.next(data), err => ob.error(err));
        });
        obs.subscribe(ob);
    }

    move(src: string, shared: boolean, destination: string, destinationShared: boolean, ob: Observer<any>) {
        let obs = new Observable(ob => {
            this.AWMobileFileSystem.move(src, shared, destination, destinationShared, data => ob.next(data), err => ob.error(err));
        });
        obs.subscribe(ob);
    }

    remove(src: string, shared: boolean, ob: Observer<any>) {
        let obs = new Observable(ob => {
            this.AWMobileFileSystem.remove(src, shared, data => ob.next(data), err => ob.error(err));
        });
        obs.subscribe(ob);
    }

    listImports(ob: Observer<any>) {
        let obs = new Observable(ob => {
            this.AWMobileFileSystem.listImports(data => ob.next(data), err => ob.error(err));
        });
        obs.subscribe(ob);
    }

    moveImport(src: string, destination: string, shared: boolean, ob: Observer<any>) {
        let obs = new Observable(ob => {
            this.AWMobileFileSystem.moveImport(src, destination, shared, data => ob.next(data), err => ob.error(err));
        });
        obs.subscribe(ob);
    }

    open(src: string, shared: boolean, ob: Observer<any>) {
        let obs = new Observable(ob => {
            this.AWMobileFileSystem.open(src, shared, data => ob.next(data), err => ob.error(err));
        });
        obs.subscribe(ob);
    }

    share(src: string, shared: boolean, ob: Observer<any>) {
        let obs = new Observable(ob => {
            this.AWMobileFileSystem.share(src, shared, data => ob.next(data), err => ob.error(err));
        });
        obs.subscribe(ob);
    }

    quicklook(src: string, shared: boolean, ob: Observer<any>) {
        let obs = new Observable(ob => {
            this.AWMobileFileSystem.quicklook(src, shared, data => ob.next(data), err => ob.error(err));
        });
        obs.subscribe(ob);
    }

    download(source: string, destination: string, headers: any, shared: boolean, ob: Observer<any>) {
        let obs = new Observable(ob => {
            this.AWMobileFileSystem.download(source, destination, headers, shared, data => ob.next(data), err => ob.error(err));
        });
        obs.subscribe(ob);
    }

    upload(source: string, destination: string, fileParameterName: string, formData: any, headers: any, shared: boolean, ob: Observer<any>) {
        let obs = new Observable(ob => {
            this.AWMobileFileSystem.upload(source, destination, fileParameterName, formData, headers, shared, data => ob.next(data), err => ob.error(err));
        });
        obs.subscribe(ob);
    }
}