import { TestBed, inject } from '@angular/core/testing';

import { NgAppworksService } from './ng-appworks.service';

describe('NgAppworksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgAppworksService]
    });
  });

  it('should be created', inject([NgAppworksService], (service: NgAppworksService) => {
    expect(service).toBeTruthy();
  }));
});
