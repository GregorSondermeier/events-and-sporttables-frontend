import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdlSportTeamsDetailsComponent } from './sport-teams-details.component';

describe('SportTeamsDetailsComponent', () => {
  let component: FdlSportTeamsDetailsComponent;
  let fixture: ComponentFixture<FdlSportTeamsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdlSportTeamsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdlSportTeamsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
