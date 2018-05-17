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

    getPath(name: string) {
        return new Observable((ob) => {
            this.AWFileSystem.getPath(name, data => ob.next(data), err => ob.error(err));
        });    
    }

    exists(path: string) {
        return new Observable(ob => {
            this.AWFileSystem.exists(path, data => ob.next(data), err => ob.error(err));
        });
    }

    isDir(path: string) {
        return new Observable(ob => {
            this.AWFileSystem.isDir(path, data => ob.next(data), err => ob.error(err));
        });
    }

    createFile(path: string, data?: string, append?: boolean) {
        return new Observable(ob => {
            this.AWFileSystem.createFile(path, data => ob.next(data), err => ob.error(err), data, append);
        });
    }

    readFile(path: string) {
        return new Observable(ob => {
            this.AWFileSystem.readFile(path, data => ob.next(data), err => ob.error(err));
        });
    }

    createDirectory(path: string) {
        return new Observable(ob => {
            this.AWFileSystem.createDirectory(path, data => ob.next(data), err => ob.error(err));
        });
    }

    copy(from: string, to: string) {
        return new Observable(ob => {
            this.AWFileSystem.copy(from, to, data => ob.next(data), err => ob.error(err));
        });
    }

    open(path: string) {
        return new Observable(ob => {
            this.AWFileSystem.open(path, data => ob.next(data), err => ob.error(err));
        });
    }

    reveal(path: string) {
        return new Observable(ob => {
            this.AWFileSystem.reveal(path, data => ob.next(data), err => ob.error(err));
        });
    }

    getDetails(path: string) {
        return new Observable(ob => {
            this.AWFileSystem.getDetails(path, data => ob.next(data), err => ob.error(err));
        });
    }

    listDirContents(path: string) {
        return new Observable(ob => {
            this.AWFileSystem.listDirContents(path, data => ob.next(data), err => ob.error(err));
        });
    }

    showSaveDialog(opts: SaveDialogOptions) {
        return new Observable(ob => {
            this.AWFileSystem.showSaveDialog(opts, data => ob.next(data), err => ob.error(err));
        });
    }

    showDirSelector(opts: SaveDialogOptions, ob: Observer<any>) {
        return new Observable(ob => {
            this.AWFileSystem.showDirSelector(opts, data => ob.next(data), err => ob.error(err));
        });
    }

    showFileSelector(opts: FileDialogOptions, ob: Observer<any>) {
        return new Observable(ob => {
            this.AWFileSystem.showFileSelector(opts, data => ob.next(data), err => ob.error(err));
        });
    }
}
