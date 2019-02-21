import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdlCommonSocialsharebarComponent } from './common-socialsharebar.component';

describe('FdlCommonSocialsharebarComponent', () => {
  let component: FdlCommonSocialsharebarComponent;
  let fixture: ComponentFixture<FdlCommonSocialsharebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdlCommonSocialsharebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdlCommonSocialsharebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
