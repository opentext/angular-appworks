import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'ng-appworks',
  template: `
    <p>
      ng-appworksjs works!
    </p>
  `,
  styles: []
})
export class NgAppworks implements OnInit {
  AWAccelerometer: any
  AWAppManager: any
  AWAuth: any
  AWCache: any
  AWCalendar: any
  AWCamera: any
  AWCompass: any
  AWComponent: any
  AWContacts: any
  AWDevice: any
  AWFileChooser: any
  AWFileSystem: any
  AWFileTransfer: any
  AWFinder: any
  AWGlobalization: any
  AWHeader: any
  AWHeaderBar: any
  AWKeyboard: any
  AWLauncher: any
  AWLocation: any
  AWMedia: any
  AWMediaCapture: any
  AWMenu: any
  AWMobileFileSystem: any
  AWNotificationManager: any
  AWOfflineManager: any
  AWPage: any
  AWPlugin: any
  AWProxy: any
  AWQRReader: any
  AWScanner: any
  AWSecureStorage: any
  AWStorage: any
  AWVibration: any
  AWWebView: any
  
  constructor() {
    this.AWAccelerometer = AWAccelerometer;
    this.AWAppManager = AWAppManager;
    this.AWAuth = AWAuth;
    this.AWCache = AWCache;
    this.AWCalendar = AWCalendar;
    this.AWCamera = AWCamera;
    this.AWCompass = AWCompass;
    this.AWComponent = AWComponent;
    this.AWContacts = AWContacts;
    this.AWDevice = AWDevice;
    this.AWFileChooser = AWFileChooser;
    this.AWFileSystem = AWFileSystem;
    this.AWFileTransfer = AWFileTransfer;
    this.AWFinder = AWFinder;
    this.AWGlobalization = AWGlobalization;
    this.AWHeader = AWHeader,
    this.AWHeaderBar = AWHeaderBar;
    this.AWKeyboard = AWKeyboard;
    this.AWLauncher = AWLauncher;
    this.AWLocation = AWLocation;
    this.AWMedia = AWMedia;
    this.AWMediaCapture = AWMediaCapture;
    this.AWMenu = AWMenu;
    this.AWMobileFileSystem = AWMobileFileSystem;
    this.AWNotificationManager = AWNotificationManager;
    this.AWOfflineManager = AWOfflineManager;
    this.AWPage = AWPage;
    this.AWPlugin = AWPlugin; 
    this.AWProxy = AWProxy;
    this.AWQRReader = AWQRReader;
    this.AWScanner = AWScanner;
    this.AWSecureStorage = AWSecureStorage;
    this.AWStorage = AWStorage;
    this.AWVibration = AWVibration;
    this.AWWebView = AWWebView;
   }

  ngOnInit() {
  }

}
