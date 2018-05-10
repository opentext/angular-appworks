# Ng-Appworks

This Angular Library for Appworks needs to be built with Angular CLI version 6.0.0.

## Get Started

```bash
npm install ng-appworks --save
```
```typescript
import {NgAppworksModule, NgAppworks} from 'ng-appworks';

@NgModule({
  imports: [
    BrowserModule,
    NgAppworksModule,
    ...
  ],
  providers: [NgAppworks]
  ...
})
export class AppModule {}
```
Then you just have to inject to where you need it:

```typescript
import {  NgAppworks  } from 'ng-appworks';

@Component({...})
export class YourComponent {
  constructor(protected appworks: NgAppworks) {
    this.auth = new appworks.AWAuth(...)
  }

}
```
## Appworks-js Documentation
For further details about Appwoks-js framework, visit [OpenText Appworks-js](https://github.com/opentext/appworks-js)

## Build
Run `npm install` for both root projects and appworks-js inside `projects\ng-appworks\src\lib\appworks-js`
Run `ng build ng-appworks`


## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

----

For community support, please refer to [https://developer.opentext.com](https://developer.opentext.com).

Copyright © 2015 Open Text SA or Open Text ULC (in Canada). All rights reserved.
Licensed under the Apache License, Version 2.0
