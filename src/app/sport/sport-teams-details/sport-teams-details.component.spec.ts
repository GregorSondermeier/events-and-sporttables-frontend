import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsSportTeamsDetailsComponent } from './sport-teams-details.component';

describe('SportTeamsDetailsComponent', () => {
  let component: GsSportTeamsDetailsComponent;
  let fixture: ComponentFixture<GsSportTeamsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsSportTeamsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsSportTeamsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
