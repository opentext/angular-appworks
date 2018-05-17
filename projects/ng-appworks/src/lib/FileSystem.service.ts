import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWFileSystem} from 'appworks-js';
import { Observable, Observer } from 'rxjs';
import { ContactProperties } from "appworks-js/src/plugins/contacts";
import { SaveDialogOptions, FileDialogOptions } from "appworks-js/src/plugins/file";

@Injectable()
export class AWFileSystemService {
    AWFileSystem: AWFileSystem
    constructor() {
        this.AWFileSystem = new AWFileSystem();
    }

    init() { }

    getPath(name: string, ob: Observer<any>) {
        let getPathObs = new Observable((ob) => {
            this.AWFileSystem.getPath(name, data => ob.next(data), err => ob.error(err));
        });
        getPathObs.subscribe(ob);
    }

    exists(path: string, ob: Observer<any>) {
        let existsObs = new Observable(ob => {
            this.AWFileSystem.exists(path, data => ob.next(data), err => ob.error(err));
        });
        existsObs.subscribe(ob);
    }

    isDir(path: string, ob: Observer<any>) {
        let isDirObs = new Observable(ob => {
            this.AWFileSystem.isDir(path, data => ob.next(data), err => ob.error(err));
        });
        isDirObs.subscribe(ob);
    }

    createFile(path: string, ob: Observer<any>, data?: string, append?: boolean) {
        let cfObs = new Observable(ob => {
            this.AWFileSystem.createFile(path, data => ob.next(data), err => ob.error(err), data, append);
        });
        cfObs.subscribe(ob);
    }

    readFile(path: string, ob: Observer<any>) {
        let fObs = new Observable(ob => {
            this.AWFileSystem.readFile(path, data => ob.next(data), err => ob.error(err));
        });
        fObs.subscribe(ob);
    }

    createDirectory(path: string, ob: Observer<any>) {
        let cdObs = new Observable(ob => {
            this.AWFileSystem.createDirectory(path, data => ob.next(data), err => ob.error(err));
        });
        cdObs.subscribe(ob);
    }

    copy(from: string, to: string, ob: Observer<any>) {
        let cObs = new Observable(ob => {
            this.AWFileSystem.copy(from, to, data => ob.next(data), err => ob.error(err));
        });
        cObs.subscribe(ob);
    }

    open(path: string, ob: Observer<any>) {
        let openObs = new Observable(ob => {
            this.AWFileSystem.open(path, data => ob.next(data), err => ob.error(err));
        });
        openObs.subscribe(ob);
    }

    reveal(path: string, ob: Observer<any>) {
        let revealObs = new Observable(ob => {
            this.AWFileSystem.reveal(path, data => ob.next(data), err => ob.error(err));
        });
        revealObs.subscribe(ob);
    }

    getDetails(path: string, ob: Observer<any>) {
        let gdObs = new Observable(ob => {
            this.AWFileSystem.getDetails(path, data => ob.next(data), err => ob.error(err));
        });
        gdObs.subscribe(ob);
    }

    listDirContents(path: string, ob: Observer<any>) {
        let lsObs = new Observable(ob => {
            this.AWFileSystem.listDirContents(path, data => ob.next(data), err => ob.error(err));
        });
        lsObs.subscribe(ob);
    }

    showSaveDialog(opts: SaveDialogOptions, ob: Observer<any>) {
        let ssObs = new Observable(ob => {
            this.AWFileSystem.showSaveDialog(opts, data => ob.next(data), err => ob.error(err));
        });
        ssObs.subscribe(ob);
    }

    showDirSelector(opts: SaveDialogOptions, ob: Observer<any>) {
        let ssObs = new Observable(ob => {
            this.AWFileSystem.showDirSelector(opts, data => ob.next(data), err => ob.error(err));
        });
        ssObs.subscribe(ob);
    }

    showFileSelector(opts: FileDialogOptions, ob: Observer<any>) {
        let ssObs = new Observable(ob => {
            this.AWFileSystem.showFileSelector(opts, data => ob.next(data), err => ob.error(err));
        });
        ssObs.subscribe(ob);
    }
}
