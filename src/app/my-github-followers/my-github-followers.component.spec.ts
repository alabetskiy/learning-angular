import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGithubFollowersComponent } from './my-github-followers.component';

describe('MyGithubFollowersComponent', () => {
  let component: MyGithubFollowersComponent;
  let fixture: ComponentFixture<MyGithubFollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGithubFollowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGithubFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
