
export class MockAsyncStorage {
    length: number;

    clear(): Promise<any> {
        return Promise.resolve();
    }

    getItem(key: string): Promise<any> {
        return Promise.resolve();
    }

    key(index: number): Promise<any> {
        return Promise.resolve();
    }

    removeItem(key: string): Promise<any> {
        return Promise.resolve();
    }

    setItem(key: string, data: string): Promise<any> {
        return Promise.resolve();
    }

    getData(): any {
        return undefined;
    }

}