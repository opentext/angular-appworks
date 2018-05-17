import {EventEmitter, Inject, Injectable} from "@angular/core";
import {
    AWAccelerometer,
    AWAppManager,
    AWAuth,
    AWCache,
    AWCalendar,
    AWCamera,
    AWCompass,
    AWComponent,
    AWContacts,
    AWDevice,
    AWFileChooser,
    AWFileSystem,
    AWFileTransfer,
    AWFinder,
    AWGlobalization,
    AWHeader,
    AWHeaderBar,
    AWKeyboard,
    AWLauncher,
    AWLocation,
    AWMedia,
    AWMediaCapture,
    AWMenu,
    AWMobileFileSystem,
    AWNotificationManager,
    AWOfflineManager,
    AWPage,
    AWPlugin,
    AWProxy,
    AWQRReader,
    AWScanner,
    AWSecureStorage,
    AWStorage,
    AWVibration,
    AWWebView
  } from 'appworks-js';


@Injectable()
export class AWCacheService {
    AWCache:any
    constructor() {
        this.AWCache = AWCache;
    }
}

@Injectable()
export class AWCompassService {
    AWCompass: any
    constructor() {
        this.AWCompass =  AWCompass;
    }
}

@Injectable()
export class AWComponentService {
    AWComponent: any
    constructor() {
        this.AWComponent =  AWComponent;
    }
}

@Injectable()
export class AWContactsService {
    AWContacts: any
    constructor() {
        this.AWContacts =  AWContacts;
    }
}

@Injectable()
export class AWDeviceService {
    AWDevice: any
    constructor() {
        this.AWDevice =  AWDevice;
    }
}

@Injectable()
export class AWFileChooserService {
    AWFileChooser: any
    constructor() {
        this.AWFileChooser =  AWFileChooser;
    }
}

@Injectable()
export class AWFileSystemService {
    AWFileSystem: any
    constructor() {
        this.AWFileSystem =  AWFileSystem;
    }
}

@Injectable()
export class AWFileTransferService {
    AWFileTransfer: any;
    constructor() {
        this.AWFileTransfer =  AWFileTransfer;
    }
}

@Injectable()
export class AWFinderService {
    AWFinder: any
    constructor() {
        this.AWFinder =  AWFinder;
    }
}

@Injectable()
export class AWGlobalizationService {
    AWGlobalization: any
    constructor() {
        this.AWGlobalization =  AWGlobalization;
    }
}

@Injectable()
export class AWHeaderService {
    AWHeader: any
    constructor() {
        this.AWHeader =  AWHeader;
    }
}

@Injectable()
export class AWHeaderBarService {
    AWHeaderBar: any
    constructor() {
        this.AWHeaderBar =  AWHeaderBar;
    }
}

@Injectable()
export class AWKeyboardService {
    AWKeyboard: any
    constructor() {
        this.AWKeyboard =  AWKeyboard;
    }
}

@Injectable()
export class AWLauncherService {
    AWLauncher: any
    constructor() {
        this.AWLauncher =  AWLauncher;
    }
}

@Injectable()
export class AWLocationService {
    AWLocation: any
    constructor() {
        this.AWLocation =  AWLocation;
    }
}

@Injectable()
export class AWMediaService {
    AWMedia: any
    constructor() {
        this.AWMedia =  AWMedia;
    }
}

@Injectable()
export class AWMediaCaptureService {
    AWMediaCapture: any
    constructor() {
        this.AWMediaCapture =  AWMediaCapture;
    }
}

@Injectable()
export class AWMenuService {
    AWMenu: any
    constructor() {
        this.AWMenu =  AWMenu;
    }
}

@Injectable()
export class AWMobileFileSystemService {
    AWMobileFileSystem: any
    constructor() {
        this.AWMobileFileSystem =  AWMobileFileSystem;
    }
}

@Injectable()
export class AWNotificationManagerService {
    AWNotificationManager: any
    constructor() {
        this.AWNotificationManager =  AWNotificationManager;
    }
}

@Injectable()
export class AWOfflineManagerService {
    AWOfflineManager: any
    constructor() {
        this.AWOfflineManager =  AWOfflineManager;
    }
}

@Injectable()
export class AWPageService {
    AWPage: any
    constructor() {
        this.AWPage =  AWPage;
    }
}

@Injectable()
export class AWPluginService {
    AWPlugin: any
    constructor() {
        this.AWPlugin =  AWPlugin;
    }
}

@Injectable()
export class AWProxyService {
    AWProxy: any
    constructor() {
        this.AWProxy =  AWProxy;
    }
}

@Injectable()
export class AWQRReaderService {
    AWQRReader: any
    constructor() {
        this.AWQRReader =  AWQRReader;
    }
}

@Injectable()
export class AWScannerService {
    AWScanner: any
    constructor() {
        this.AWScanner =  AWScanner;
    }
}

@Injectable()
export class AWSecureStorageService {
    AWSecureStorage: any
    constructor() {
        this.AWSecureStorage =  AWSecureStorage;
    }
}

@Injectable()
export class AWStorageService {
    AWStorage: any
    constructor() {
        this.AWStorage =  AWStorage;
    }
}

@Injectable()
export class AWVibrationService {
    AWVibration: any
    constructor() {
        this.AWVibration =  AWVibration;
    }
}

@Injectable()
export class AWWebViewService {
    AWWebView: any
    constructor() {
        this.AWWebView =  AWWebView;
    }
}
