import {PersistentStorage} from 'appworks-js/src/plugins/storage/index';

export class PersistentStorageMock implements PersistentStorage {

    persistLocalStorage(): Promise<any> {
        return Promise.resolve();
    }

    loadPersistentData(): Promise<any> {
        return Promise.resolve();
    }

}