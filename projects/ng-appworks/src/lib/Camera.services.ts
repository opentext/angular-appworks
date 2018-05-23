import {Injectable} from "@angular/core";
import {AWCamera} from 'appworks-js';
import { Observable, Observer } from 'rxjs';


@Injectable()
export class AWCameraService {
    AWCamera: AWCamera
    constructor() {
    }

    takePicture(options?: any) {
        return new Observable(ob => {
            this.AWCamera = new AWCamera(data => ob.next(data), err => ob.error(err));
            this.AWCamera.takePicture(options);
        });
    }

    openGallery(options?: any) {
        return new Observable(ob => {
            this.AWCamera = new AWCamera(data => ob.next(data), err => ob.error(err));
            return this.AWCamera.openGallery(options);
        });
    }
}