import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdlSportQuicknavComponent } from './sport-quicknav.component';

describe('SportQuicknavComponent', () => {
  let component: FdlSportQuicknavComponent;
  let fixture: ComponentFixture<FdlSportQuicknavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdlSportQuicknavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdlSportQuicknavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
