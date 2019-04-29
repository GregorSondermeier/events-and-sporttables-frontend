import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsCommonSocialsharebarComponent } from './common-socialsharebar.component';

describe('GsCommonSocialsharebarComponent', () => {
  let component: GsCommonSocialsharebarComponent;
  let fixture: ComponentFixture<GsCommonSocialsharebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsCommonSocialsharebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsCommonSocialsharebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
