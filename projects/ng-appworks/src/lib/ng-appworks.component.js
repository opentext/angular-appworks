"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("./appworks-js/index");
var NgAppworks = (function () {
    function NgAppworks() {
        this.AWAccelerometer = index_1.AWAccelerometer;
        this.AWAppManager = index_1.AWAppManager;
        this.AWAuth = index_1.AWAuth;
        this.AWCache = index_1.AWCache;
        this.AWCalendar = index_1.AWCalendar;
        this.AWCamera = index_1.AWCamera;
        this.AWCompass = index_1.AWCompass;
        this.AWComponent = index_1.AWComponent;
        this.AWContacts = index_1.AWContacts;
        this.AWDevice = index_1.AWDevice;
        this.AWFileChooser = index_1.AWFileChooser;
        this.AWFileSystem = index_1.AWFileSystem;
        this.AWFileTransfer = index_1.AWFileTransfer;
        this.AWFinder = index_1.AWFinder;
        this.AWGlobalization = index_1.AWGlobalization;
        this.AWHeader = index_1.AWHeader,
            this.AWHeaderBar = index_1.AWHeaderBar;
        this.AWKeyboard = index_1.AWKeyboard;
        this.AWLauncher = index_1.AWLauncher;
        this.AWLocation = index_1.AWLocation;
        this.AWMedia = index_1.AWMedia;
        this.AWMediaCapture = index_1.AWMediaCapture;
        this.AWMenu = index_1.AWMenu;
        this.AWMobileFileSystem = index_1.AWMobileFileSystem;
        this.AWNotificationManager = index_1.AWNotificationManager;
        this.AWOfflineManager = index_1.AWOfflineManager;
        this.AWPage = index_1.AWPage;
        this.AWPlugin = index_1.AWPlugin;
        this.AWProxy = index_1.AWProxy;
        this.AWQRReader = index_1.AWQRReader;
        this.AWScanner = index_1.AWScanner;
        this.AWSecureStorage = index_1.AWSecureStorage;
        this.AWStorage = index_1.AWStorage;
        this.AWVibration = index_1.AWVibration;
        this.AWWebView = index_1.AWWebView;
    }
    NgAppworks.prototype.ngOnInit = function () {
    };
    return NgAppworks;
}());
NgAppworks = __decorate([
    core_1.Component({
        selector: 'ng-appworks',
        template: "\n    <p>\n      ng-appworksjs works!\n    </p>\n  ",
        styles: []
    })
], NgAppworks);
exports.NgAppworks = NgAppworks;
//# sourceMappingURL=ng-appworks.component.js.map