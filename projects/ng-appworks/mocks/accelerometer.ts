import { Accelerometer } from "appworks-js/src/plugins/device-motion";

export class MockAccelerometer implements Accelerometer {
    getCurrentAcceleration(accelerometerSuccess: (acceleration) => void,
                           accelerometerError: () => void,
                           accelerometerOptions?) {
                               return null;
    }

    watchAcceleration(accelerometerSuccess: (acceleration) => void,
                      accelerometerError: () => void,
                      accelerometerOptions?) {
                          return null;
    }

    clearWatch(watchID): void {

    }
}
