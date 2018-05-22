import { ModuleWithProviders } from '@angular/compiler/src/core'
import { NgModule } from '@angular/core';
import { AWAccelerometerService } from './Accelerometer.service';
import { AWAuthService } from './Auth.service';
import { AWAppManagerService } from './Appmanager.service';
import { AWCacheService } from './Cache.service';
import { AWCalendarService } from './Calendar.service';
import { AWCameraService } from './Camera.services';
import { AWCompassService } from './Compass.service';
import { AWComponentService } from './Component.service';
import { AWContactsService } from './Contact.service';
import { AWFileChooserService } from './FileChooser.service';
import { AWFileSystemService } from './FileSystem.service';
import { AWFileTransferService } from './FileTransfer.service';
import { AWGlobalizationService } from './Globalization.sevice';
import { AWHeaderBarService } from './Headerbar.service';
import { AWKeyboardService } from './Keyboard.service';
import { AWFinderService } from './Finder.service';
import { AWLauncherService } from './Launcher.service';
import { AWLocationService } from './Location.service';
import { AWMediaCaptureService } from './MediaCapture.service';
import { AWMediaService } from './Media.service';
import { AWMobileFileSystemService } from './MobileFileSystem.service';
import { AWNotificationManagerService } from './NotificationManager.service';
import { AWMenuService } from './Menu.service';
import { AWOfflineManagerService } from './OfflineManager.service';
import { AWQRReaderService } from './QRReader.service';
import { AWScannerService } from './Scanner.service';
import { AWSecureStorageService } from './SecureStorage.service';
import { AWStorageService } from './Storage.service';
import { AWWebViewService } from './WebView.service';
import { AWVibrationService } from './Vibration.service';
import { AWDeviceService } from './Device.service';


@NgModule({})
export class NgAppworksModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgAppworksModule,
            providers:[
                AWAccelerometerService,
                AWAppManagerService,
                AWAuthService,
                AWCacheService,
                AWCalendarService,
                AWCameraService,
                AWCompassService,
                AWComponentService,
                AWContactsService,
                AWDeviceService,
                AWFileChooserService,
                AWFileTransferService,
                AWFileSystemService,
                AWGlobalizationService,
                AWHeaderBarService,
                AWKeyboardService,
                AWFinderService,
                AWLauncherService,
                AWLocationService,
                AWMediaCaptureService,
                AWMediaService,
                AWMobileFileSystemService,
                AWNotificationManagerService,
                AWMenuService,
                AWOfflineManagerService,
                AWQRReaderService,
                AWScannerService,
                AWSecureStorageService,
                AWStorageService,
                AWWebViewService,
                AWVibrationService
            ]
        }
    }
}