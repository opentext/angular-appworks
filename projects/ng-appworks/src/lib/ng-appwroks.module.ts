import { ModuleWithProviders } from '@angular/compiler/src/core';
// import { AWAccelerometerService,
//             AWAppManagerService,
//             AWAuthService,
//             AWCacheService,
//             AWCalendarService,
//             AWCameraService,
//             AWCompassService,
//             AWComponentService,
//             AWContactsService,
//             AWDeviceService,
//             AWFileChooserService,
//             AWFileSystemService,
//             AWFileTransferService,
//             AWFinderService,
//             AWGlobalizationService,
//             AWHeaderService,
//             AWHeaderBarService,
//             AWKeyboardService,
//             AWLauncherService,
//             AWLocationService,
//             AWMediaService,
//             AWMediaCaptureService,
//             AWMenuService,
//             AWMobileFileSystemService,
//             AWNotificationManagerService,
//             AWOfflineManagerService,
//             AWPageService,
//             AWPluginService,
//             AWProxyService,
//             AWQRReaderService,
//             AWScannerService,
//             AWSecureStorageService,
//             AWStorageService,
//             AWVibrationService,
//             AWWebViewService } from './ng-appworks.service';
import {AWAccelerometerService} from './Accelerometer.service';
import {AWAuthService} from './Auth.service';
import { NgModule } from '@angular/core';


@NgModule({})
export class NgAppworksModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgAppworksModule,
            providers:[
                AWAccelerometerService,
                AWAuthService
                // AWAppManagerService,
                // AWAuthService,
                // AWCacheService,
                // AWCalendarService,
                // AWCameraService,
                // AWCompassService,
                // AWComponentService,
                // AWContactsService,
                // AWDeviceService,
                // AWFileChooserService,
                // AWFileSystemService,
                // AWFileTransferService,
                // AWFinderService,
                // AWGlobalizationService,
                // AWHeaderService,
                // AWHeaderBarService,
                // AWKeyboardService,
                // AWLauncherService,
                // AWLocationService,
                // AWMediaService,
                // AWMediaCaptureService,
                // AWMenuService,
                // AWMobileFileSystemService,
                // AWNotificationManagerService,
                // AWOfflineManagerService,
                // AWPageService,
                // AWPluginService,
                // AWProxyService,
                // AWQRReaderService,
                // AWScannerService,
                // AWSecureStorageService,
                // AWStorageService,
                // AWVibrationService,
                // AWWebViewService
            ]
        }
    }
}