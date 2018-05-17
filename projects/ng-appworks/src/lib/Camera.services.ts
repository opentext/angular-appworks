import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWCamera} from 'appworks-js';
import { Observable, Observer } from 'rxjs';


@Injectable()
export class AWCameraService {
    AWCamera: AWCamera
    onChange: Observable<any>
    constructor() {
        this.onChange = new Observable((ob) => {
            this.AWCamera = new AWCamera(data => ob.next(data), err => ob.error(err));
        });
    }

    init(ob: Observer<any>) {
        this.onChange.subscribe(ob);
    }

    takePicture(options?: any) {
        return this.AWCamera.takePicture(options);
    }

    openGallery(options?: any) {
        return this.AWCamera.openGallery(options);
    }

}