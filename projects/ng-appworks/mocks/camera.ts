import { CameraInterface } from "appworks-js/src/plugins/camera";

export class MockCamera implements CameraInterface {

    cleanup(
        onSuccess: () => void,
        onError: (message: string) => void): void {
    }

    getPicture(
        cameraSuccess: (data: string) => void,
        cameraError: (message: string) => void,
        cameraOptions?): void {
    }
}
