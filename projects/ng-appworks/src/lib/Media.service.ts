import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWMedia} from 'appworks-js';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AWMediaService {
    AWMedia: AWMedia
    onChange: Observable<any>
    constructor() {
    }

    init(filename: string, ob: Observer<any>) {
        this.onChange = new Observable(ob => {
            this.AWMedia = new AWMedia(filename, data => ob.next(data), err => ob.error(err));
        });
        this.onChange.subscribe(ob);
    }

    play() {
        this.AWMedia.play();
    }

    pause() {
        this.AWMedia.play();
    }

    release() {
        this.AWMedia.play();
    }

    seekTo(value: number) {
        return this.AWMedia.seekTo(value);
    }

    setVolume(value: number) {
        return this.AWMedia.setVolume(value);
    }

    stop() {
        return this.AWMedia.stop();
    }

    stopRecord() {
        return this.AWMedia.stopRecord();
    }

    startRecord() {
        return this.AWMedia.startRecord();
    }

    getDuration() {
        this.AWMedia.getDuration();
    }

    getCurrentPosition(ob: Observer<any>) {
        let obs = new Observable(ob => {
            this.AWMedia.getCurrentPosition(data => ob.next(data), err => ob.error(err));
        });
        obs.subscribe(ob);
    }
}