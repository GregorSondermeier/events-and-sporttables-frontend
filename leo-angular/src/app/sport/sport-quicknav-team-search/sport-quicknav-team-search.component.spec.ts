import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdlSportQuicknavTeamSearchComponent } from './sport-quicknav-team-search.component';

describe('SportQuicknavTeamSearchComponent', () => {
  let component: FdlSportQuicknavTeamSearchComponent;
  let fixture: ComponentFixture<FdlSportQuicknavTeamSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdlSportQuicknavTeamSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdlSportQuicknavTeamSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
