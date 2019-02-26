import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdlEventsSearchcriteriaBadgesComponent } from './events-searchcriteria-badges.component';

describe('EventsSearchcriteriaLabelsComponent', () => {
  let component: FdlEventsSearchcriteriaBadgesComponent;
  let fixture: ComponentFixture<FdlEventsSearchcriteriaBadgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdlEventsSearchcriteriaBadgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdlEventsSearchcriteriaBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
