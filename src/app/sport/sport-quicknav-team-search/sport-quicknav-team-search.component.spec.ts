import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsSportQuicknavTeamSearchComponent } from './sport-quicknav-team-search.component';

describe('SportQuicknavTeamSearchComponent', () => {
  let component: GsSportQuicknavTeamSearchComponent;
  let fixture: ComponentFixture<GsSportQuicknavTeamSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsSportQuicknavTeamSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsSportQuicknavTeamSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
