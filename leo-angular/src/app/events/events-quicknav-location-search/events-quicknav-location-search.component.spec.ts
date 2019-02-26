import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdlEventsQuicknavLocationSearchComponent } from './events-quicknav-location-search.component';

describe('EventsQuicknavLocationSearchComponent', () => {
  let component: FdlEventsQuicknavLocationSearchComponent;
  let fixture: ComponentFixture<FdlEventsQuicknavLocationSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdlEventsQuicknavLocationSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdlEventsQuicknavLocationSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
