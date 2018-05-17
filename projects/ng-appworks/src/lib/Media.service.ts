import {EventEmitter, Inject, Injectable} from "@angular/core";
import {AWMedia} from 'appworks-js';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AWMediaService {
    AWMedia: AWMedia
    constructor() {
    }

    attach(filename: string) {
        return new Observable(ob => {
            this.AWMedia = new AWMedia(filename, data => ob.next(data), err => ob.error(err));
        });
    }

    play() {
        this.AWMedia.play();
    }

    pause() {
        this.AWMedia.pause();
    }

    release() {
        this.AWMedia.release();
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

    getCurrentPosition() {
        return new Observable(ob => {
            this.AWMedia.getCurrentPosition(data => ob.next(data), err => ob.error(err));
        });
    }
}