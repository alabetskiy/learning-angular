import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIftestComponent } from './ng-iftest.component';

describe('NgIftestComponent', () => {
  let component: NgIftestComponent;
  let fixture: ComponentFixture<NgIftestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIftestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIftestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
