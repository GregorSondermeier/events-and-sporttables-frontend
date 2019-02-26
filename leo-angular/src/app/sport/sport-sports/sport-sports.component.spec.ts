import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdlSportSportsComponent } from './sport-sports.component';

describe('SportSportsComponent', () => {
  let component: FdlSportSportsComponent;
  let fixture: ComponentFixture<FdlSportSportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdlSportSportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdlSportSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
