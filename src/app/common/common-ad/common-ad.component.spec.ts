import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsCommonAdComponent } from './common-ad.component';

describe('GsCommonAdComponent', () => {
  let component: GsCommonAdComponent;
  let fixture: ComponentFixture<GsCommonAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsCommonAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsCommonAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
