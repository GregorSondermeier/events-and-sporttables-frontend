import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsEventsSearchcriteriaBadgesComponent } from './events-searchcriteria-badges.component';

describe('EventsSearchcriteriaLabelsComponent', () => {
  let component: GsEventsSearchcriteriaBadgesComponent;
  let fixture: ComponentFixture<GsEventsSearchcriteriaBadgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsEventsSearchcriteriaBadgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsEventsSearchcriteriaBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
