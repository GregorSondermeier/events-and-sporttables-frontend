import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsEventsQuicknavLocationSearchComponent } from './events-quicknav-location-search.component';

describe('EventsQuicknavLocationSearchComponent', () => {
  let component: GsEventsQuicknavLocationSearchComponent;
  let fixture: ComponentFixture<GsEventsQuicknavLocationSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsEventsQuicknavLocationSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsEventsQuicknavLocationSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
