import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCoursesFromComponent } from './my-courses-from.component';

describe('MyCoursesFromComponent', () => {
  let component: MyCoursesFromComponent;
  let fixture: ComponentFixture<MyCoursesFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCoursesFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCoursesFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
