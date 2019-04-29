import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsEventsQuicknavQuerySearchComponent } from './events-quicknav-query-search.component';

describe('EventsQuicknavQuerySearchComponent', () => {
  let component: GsEventsQuicknavQuerySearchComponent;
  let fixture: ComponentFixture<GsEventsQuicknavQuerySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsEventsQuicknavQuerySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsEventsQuicknavQuerySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
