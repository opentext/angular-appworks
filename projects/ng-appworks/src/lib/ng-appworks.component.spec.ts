import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAppworksComponent } from './ng-appworks.component';

describe('NgAppworksComponent', () => {
  let component: NgAppworksComponent;
  let fixture: ComponentFixture<NgAppworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAppworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAppworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
