import {InAppBrowser} from 'appworks-js/src/plugins/webview/index';

export class MockWebview {
    open(url: string, target?: string, options?: string): InAppBrowser {
        return null;
    }
}