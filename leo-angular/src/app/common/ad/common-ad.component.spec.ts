import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdlCommonAdComponent } from './common-ad.component';

describe('FdlCommonAdComponent', () => {
  let component: FdlCommonAdComponent;
  let fixture: ComponentFixture<FdlCommonAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdlCommonAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdlCommonAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
