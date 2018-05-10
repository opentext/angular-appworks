import { TestBed, inject } from '@angular/core/testing';

import { NgAppworksService } from './ng-appworks.service';

describe('NgAppworksjsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgAppworksService]
    });
  });

  it('should be created', inject([NgAppworksService], (service) => {
    expect(service).toBeTruthy();
  }));
});
