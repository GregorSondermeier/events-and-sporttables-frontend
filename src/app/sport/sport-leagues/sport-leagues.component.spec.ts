import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdlSportLeaguesComponent } from './sport-leagues.component';

describe('SportLeaguesComponent', () => {
  let component: FdlSportLeaguesComponent;
  let fixture: ComponentFixture<FdlSportLeaguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdlSportLeaguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdlSportLeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
