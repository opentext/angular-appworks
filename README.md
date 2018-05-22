# Ng-Appworks

This Angular Library for Appworks needs to be built with Angular CLI version 6.0.0.

## Get Started

```bash
npm install ng-appworks --save
```
### Use as App-wise Singleton Services
#### app.module.ts
```typescript
 import { NgAppworksModule } from 'ng-appworks';
 ...,

@NgModule({
   ...,
   imports: [
     ...,
     NgAppworksModule.forRoot(),
     ...
   ]
   ...
 })
 ...
```
#### xxx.component.ts
```typescript
import {  AWAuthService } from 'ng-appworks';
...
@Component({...})
export class YourComponent {
  constructor(authService: AWAuthService) {
    ...
  }
}

...
```
### Use as Component-wise services
#### xxx.component.ts
```typescript
import { AWAuthService } from 'ng-appworks';
...
@component({
  ...,
  providers: [AWAuthService],
  ...
})

export class YourComponent {
  constructor(authService: AWAuthService) {
    ...
  }
}
...
```
### Table of Contents
Most API uses Observators, return `Observerable`
For Uses of Observerables
```typescript
   let ob = {
     next: data => { ... }
     error: err => { ... }
   };
   let obs = AWSomeService.someMethod();
   obs.subscribe(ob);
```
* [API Usage and Examples](#api-usage-and-examples)
  - [AWAccelerometerService](#awaccelerometerservice)
  - [AWAppManagerService](#awappmanagerservice)
  - [AWAuthService](#awauthservice)
  - [AWCacheService](#awcacheservice)
  - [AWCalendarService](#awcalendarservice)
  - [AWCameraService](#awcameraservice)
  - [AWCompassService](#awcompassservice)
  - [AWComponentService](#awcomponentservice)
  - [AWContactsService](#awcontactsservice)
  - [AWDeviceService](#awdeviceservice)
  - [AWFileChooserService](#awfilechooserservice)
  - [AWFileSystemService](#awfilesystemservice)
  - [AWFileTransferService](#awfiletransferservice)
  - [AWFinderService](#awfinderservice)
  - [AWGlobalizationService](#awglobalizationservice)
  - [AWHeaderBarService](#awheaderbarservice)
  - [AWLauncherService](#awlauncherservice)
  - [AWLocationService](#awlocationservice)
  - [AWMediaService](#awmediaservice)
  - [AWMediaCaptureService](#awmediacaptureservice)
  - [AWMenuService](#awmenuservice)
  - [AWMobileFileSystemService](#awmobilefilesystemservice)
  - [AWNotificationManagerService](#awnotificationmanagerservice)
  - [AWPageService](#awpageservice)
  - [AWOfflineManagerService](#awofflinemanagerservice)
  - [AWScannerService](#awscannerservice)
  - [AWVibrationService](#awvibrationservice)
  - [AWWebViewService](#awwebviewservice)
  - [AWQRReaderService](#awqrreaderservice)
  - [AWSecureStorageService](#awsecurestorageservice)
  - [AWScannerService](#awscannerservice)
  - [AWStorageService](#awstorageservice)
  - [AWVibrationService](#awvibrationservice)
  - [AWWebViewService](#awwebviewservice)
  
#### AWAccelerometerService
##### Methods:
###### attach
```typescript
  attach(): Observable // create a new instance of AWAccelermoter with new callbacks
```
###### getCurrentAcceleration
```typescript
  getCurrentAcceleration(): Observable
```
###### gateway
```typesript
  gateway(): Observable
```
###### watchAcceleration
```typescript
  watchAcceleration(options?): watchId: number
```
###### clearWatch
```typescript
  clearWatch(watchId: number)
```

#### AWAppManagerService
##### Methods:
###### closeActiveApp
```typescript
  closeActiveApp(): Observable
````
#### AWAuthService
##### Methods:
###### authenticate
```typescript
  authenticate(force?: boolean): Observable
```
###### getAuthResponse
```typescript
  getAuthResponse(): Observable
```
###### gateway
```typescript
  gateway(): Observable
```
###### online
```typescript
  online(): Observable
```
###### otdsssoticket
```typescript
  otdsssoticket(): Observable
```

#### AWCacheService
##### Methods:
###### init
```typescript
  init(option?) // configure AWCache with option
```
###### setItem
```typescript
  setItem(key: string, value: any)
```
###### getItem
```typescript
  getItem(key: string): any
```
###### removeItem
```typescript
  removeItem(key: string)
```
###### clear
```typescript
  clear()
```

#### AWCalendarService
##### Methods:
###### init
```typescript
  init(option?) // configure AWCache with option
```
###### getCalendarOptions
```typescript
  getCalendarOptions(): Option
```
###### hasReadPermission
```typescript
  hasReadPermission(): Observable
```
###### requestReadPermission
```typescript
  requestReadPermission(): Observable
```
###### hasWritePermission
```typescript
  hasWritePermission(): Observable
```
###### requestReadWritePermission
```typescript
  requestReadWritePermission(): Observable
```
###### hasReadWritePermission
```typescript
  hasReadWritePermission(): Observable
```
###### createCalendar
```typescript
  createCalendar(option): Observable
```
###### deleteCalendar
```typescript
  deleteCalendar(calendarName: string): Observable
```
###### openCalendar
```typescript
  openCalendar(date: Date): Observable
```
###### createEventWithOptions
```typescript
  createEventWithOptions(title: string,
            location: string,
            notes: string,
            startDate: Date,
            endDate: Date,
            options): Observable
```
###### createEvent
```typescript
  createEvent(title: string,
        location: string,
        notes: string,
        startDate: Date,
        endDate: Date): Observable
```
###### createEventInteractivelyWithOptions
```typescript
  createEventInteractivelyWithOptions(title: string,
        location: string,
        notes: string,
        startDate: Date,
        endDate: Date,
        options: any): Observable
```
###### createEventInteractively
```typescript
  createEventInteractively(title: string,
        location: string,
        notes: string,
        startDate: Date,
        endDate: Date): Observable
```
###### findEventWithOptions
```typescript
  findEventWithOptions(title: string,
        location: string,
        notes: string,
        startDate: Date,
        endDate: Date,
        options: any): Observable
```
###### findEvent
```typescript
  findEvent(title: string,
        location: string,
        notes: string,
        startDate: Date,
        endDate: Date): Observable
```
###### findAllEventsInNamedCalendar
```typescript
  findAllEventsInNamedCalendar(name: string): Observable
```
###### deleteEvent
```typescript
  deleteEvent(title: string,
        location: string,
        notes: string,
        startDate: Date,
        endDate: Date,
        options: any): Observable
```
###### deleteEventFromNamedCalendar
```typescript
  deleteEventFromNamedCalendar(title: string,
        location: string,
        notes: string,
        startDate: Date,
        endDate: Date,
        calendarName: string): Observable
```
###### modifyEventWithOptions
```typescript
  modifyEventWithOptions(title: string,
        location: string,
        notes: string,
        startDate: Date,
        endDate: Date,
        newTitle: string,
        newLocation: string,
        newNotes: string,
        newStartDate: Date,
        newEndDate: Date,
        options,
        newOptions): Observable
```
###### modifyEvent
```typescript
  modifyEvent(title: string,
        location: string,
        notes: string,
        startDate: Date,
        endDate: Date,
        newTitle: string,
        newLocation: string,
        newNotes: string,
        newStartDate: Date,
        newEndDate: Date): Observable
```
###### modifyEventInNamedCalendar
```typescript
  modifyEventInNamedCalendar(title: string,
        location: string,
        notes: string,
        startDate: Date,
        endDate: Date,
        newTitle: string,
        newLocation: string,
        newNotes: string,
        newStartDate: Date,
        newEndDate: Date,
        calendarName: string): Observable
```
###### listCalendars
```typescript
  listCalendars(): Observable
```
###### listEventsInRange
```typescript
  listEventsInRange(startDate: Date, endDate: Date): Observable
```
#### AWCameraService
##### Methods:
###### takePicture
```typescript
  takePicture(option?): Observable
```
###### openGallery
```typescript
  openGallery(option?): Observable
```

#### AWCompassService
##### Methods:
###### attach
```typescript
  attach(): Observable //create a new instance of AWCompass with new callbacks
```
###### getCurrentHeading
```typescript
  getCurrentHeading(): Observable
```
###### watchHeading
```typescript
  watchHeading(option?): watchId: number
```
###### clearWatch
```typescript
  clearWatch(watchId: number)
```

#### AWComponentService
##### Methods:
###### open
```typescript
  open(args?: any[]): Observable
```
###### list
```typescript
  list(args?: any[]): Observable
```
###### check
```typescript
  check(args?: any[]): Observable
```
###### close
```typescript
  close(args?: any[]): Observable
```

#### AWContactsService
##### Methods:
###### create
```typescript
  create(properties?: ContactProperties): Observable
```
###### find
```typescript
  find(contactFields: string[], options?: any): Observable
```
###### pickContact
```typescript
  pickContact(): Observable
```
#### AWDeviceService
##### Methods:
###### getDeviceInfo
```typescript
  getDeviceInfo()
```
#### AWFileChooserService
##### Methods:
###### selectAndUpload
```typescript
  selectAndUpload(action: string): Observable
```
#### AWFileSystemService
##### Methods:
###### getPath
```typescript
  getPath(name: string): Observable
```
###### exists
```typescript
  exists(path: string): Observable
```
###### isDir
```typescript
  isDir(path: string): Observable
```
###### createFile
```typescript
  createFile(path: string, data?: string, append?: boolean): Observable
```
###### readFile
```typescript
  readFile(path: string): Observable
```
###### createDirectory
```typescript
  createDirectory(path: string): Observable
```
###### copy
```typescript
  copy(from: string, to: string): Observable
```
###### open
```typescript
  open(path: string): Observable
```
###### reveal
```typescript
  reveal(path: string): Observable
```
###### getDetails
```typescript
  getDetails(path: string): Observable
```
###### listDirContents
```typescript
  listDirContents(path: string): Observable
```
###### showSaveDialog
```typescript
  showSaveDialog(opts: SaveDialogOptions): Observable
```
###### showDirSelector
```typescript
  showDirSelector(opts: SaveDialogOptions): Observable
```
###### showFileSelector
```typescript
  showFileSelector(opts: FileDialogOptions): Observable
```
#### AWFileTransferService
##### Methods:
###### attach
```typescript
  attach(): Observable //create a new instance of AWFileTransfer with new callbacks
```
###### download
```typescript
  download(url: string, target: string, options?: any, shared?: boolean): Observable
```
###### upload
```typescript
  upload(source: string, url: string, options?: any, shared?: boolean): Observable
```
###### progressHandler
```typescript
  progressHandler(): Observable
```
###### abort
```typescript
  abort()
```
#### AWFinderService
##### Methods:
###### open
```typescript
  open(path: string, filename: string): Observable
```
###### share
```typescript
  share(filename: string): Observable
```
###### list
```typescript
  list(filename: string): Observable
```
#### AWGlobalizationService
##### Methods:
###### getPreferredLanguage
```typescript
  getPreferredLanguage(): Observable
```
#### AWHeaderBarService
##### Methods:
###### setHeader
```typescript
  setHeader(config: any): Observable
```
###### getHeader
```typescript
  getHeader(): Observable
```
###### setHeaderButtons
```typescript
  setHeaderButtons(config: any): Observable
```
###### maskHeader
```typescript
  maskHeader(shouldMaskHeader: boolean)
```
#### AWKeyboardService
##### Methods:
###### hideKeyboardAccessoryBar
```typescript
  hideKeyboardAccessoryBar(hide: boolean)
```
###### close
```typescript
  close()
```
###### show
```typescript
  show()
```
###### disableScroll
```typescript
  disableScroll(disable: boolean)
```
#### AWLauncherService
##### Methods:
###### getLaunchURL
```typescript
  getLaunchURL(): Observable
```
###### clearLanuchUrl
```typescript
  clearLanuchUrl()
```
#### AWLocationService
##### Methods:
###### attach
```typescript
  attach(): Observable //create a new instance of AWLocation with new callbacks
```
###### play
```typescript
  play()
```
###### pause
```typescript
  pause()
```
###### release
```typescript
  release()
```
###### seekTo
```typescript
  seekTo(value: number)
```
###### setVolume
```typescript
  setVolume(value: number)
```
###### stop
```typescript
  stop()
```
###### stopRecord
```typescript
  stopRecord()
```
###### startRecord
```typescript
  startRecord()
```
###### getDuration
```typescript
  getDuration()
```
###### getCurrentPosition
```typescript
  getCurrentPosition(): Observer
```

#### AWMediaService
##### Methods:
###### attach
```typescript
  attach(filename: string): Observable //create a new instance of AWMedia with new callbacks
```
###### getCurrentPosition
```typescript
  getCurrentPosition(options?: any): Observable
```
###### watchPosition
```typescript
  watchPosition(options?: any): watchId: number
```
###### clearWatch
```typescript
  clearWatch(watchID: number)
```
#### AWMediaCaptureService
##### Methods:
###### captureAudio
```typescript
  captureAudio(options?: any): Observable
```
###### captureImage
```typescript
  captureImage(options?: any): Observable
```
###### captureVideo
```typescript
  captureVideo(options?: any): Observable
```
#### AWMenuService
##### Methods:
###### setMenu
```typescript
  setMenu(sections: any[]): Observable
```
#### AWMobileFileSystemService
##### Methods:
###### list
```typescript
  list(directory: string, shared: boolean): Observable
```
###### exists
```typescript
  exists(src: string, shared: boolean): Observable
```
###### rename
```typescript
  rename(src: string, destination: string, shared: boolean): Observable
```
###### copy
```typescript
  copy(src: string, shared: boolean, destination: string, destinationShared: boolean): Observable
```
###### move
```typescript
  move(src: string, shared: boolean, destination: string, destinationShared: boolean): Observable
```
###### remove
```typescript
  remove(src: string, shared: boolean): Observable
```
###### listImports
```typescript
  listImports()
```
###### moveImport
```typescript
  moveImport(src: string, destination: string, shared: boolean): Observable
```
###### open
```typescript
  open(src: string, shared: boolean): Observable
```
###### share
```typescript
  share(src: string, shared: boolean): Observable
```

###### quicklook
```typescript
  quicklook(src: string, shared: boolean): Observable
```
###### download
```typescript
  download(source: string, destination: string, headers: any, shared: boolean): Observable
```
###### upload
```typescript
  upload(source: string, destination: string, fileParameterName: string, formData: any, headers: any, shared: boolean): Observable
```
#### AWNotificationManagerService
##### Methods:
###### enablePushNotifications
```typescript
  enablePushNotifications(includeSeqNo: boolean): Observable
```
###### getNotifications
```typescript
  getNotifications(includeSeqNo: boolean): Observable
```
###### disablePushNotifications
```typescript
  disablePushNotifications()
```
###### getOpeningNotification
```typescript
  getOpeningNotification(includeSeqNo: boolean): Observable
```
###### removeNotification
```typescript
  removeNotification(seqNo: any): Observable
```
###### openListener
```typescript
  openListener(includeSeqNo: boolean): Observable
```
#### AWOfflineManagerService
##### Methods:
###### init
```typescript
  init(options) //configure AWOfflineManager with option
```
###### defer
```typescript
  defer(eventName: string, args: any)
```
###### cancel
```typescript
  cancel(id: number)
```
###### networkStatus
```typescript
  networkStatus()
```
#### AWPageService
##### Methods:
###### setPageUrl
```typescript
  setPageUrl(url: string): Observable
```
###### openModalAppWebView
```typescript
  openModalAppWebView(url: string, title: string, closetitle: string): Observable
```
###### openModalExternalWebView
```typescript
  openModalExternalWebView(url: string, title: string, closetitle: string, options?: any): Observable
```
###### setActionButtonCallback
```typescript
  setActionButtonCallback(actionTitle: string): Observable
```
###### closeModalAppWebView
```typescript
  closeModalAppWebView(): Observable
```
###### video
```typescript
  video(url: string): Observable
```
#### AWQRReaderService
##### Methods:
###### scan
```typescript
  scan(): Observable
```
#### AWScannerService
##### Methods:
###### scanDocument
```typescript
  scanDocument(returnType: Number): Observable
```
#### AWSecureStorageService
##### Methods:
###### store
```typescript
  store(url: string, filename: string, options?: any): Observable
```
###### retrieve
```typescript
  retrieve(filename: string, options?: any): Observable
```
###### remove
```typescript
  remove(target: string): Observable
```
###### fileExistsAtPath
```typescript
  fileExistsAtPath(target: string): Observable
```
#### AWStorageService
##### Methods:
###### clear
```typescript
  clear()
```
###### getItem
```typescript
  getItem(key: string)
```
###### key
```typescript
  key(index: number)
```
###### removeItem
```typescript
  removeItem(target: string)
```
###### setItem
```typescript
  setItem(key: string, data: any)
```
#### AWVibrationService
##### Methods:
###### vibrate
```typescript
  vibrate(time: number)
```
#### AWWebViewService
##### Methods:
###### open
```typescript
  open(url: string, target?: string, options?: string)
```
###### addEventListener
```typescript
  addEventListener(type: string): Observable
```
###### removeEventListener
```typescript
  removeEventListener(type: string): Observable
```
###### show
```typescript
  show()
```

###### close
```typescript
  close()
```
###### executeScript
```typescript
  executeScript(script: string): Observable
```

###### close
```typescript
  insertCSS(script: string): Observable
```
## Appworks Documentation
For further details about Appwoks framework, visit [OpenText Appworks-js](https://github.com/opentext/appworks-js)

## Build
Run `npm install` for both root projects and ng-appworks inside `projects`
Run `ng build ng-appworks`


## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

----

For community support, please refer to [https://developer.opentext.com](https://developer.opentext.com).

Copyright © 2018 Open Text SA or Open Text ULC (in Canada). All rights reserved.
Licensed under the Apache License, Version 2.0
