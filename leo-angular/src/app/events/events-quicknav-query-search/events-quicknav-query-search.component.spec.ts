import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdlEventsQuicknavQuerySearchComponent } from './events-quicknav-query-search.component';

describe('EventsQuicknavQuerySearchComponent', () => {
  let component: FdlEventsQuicknavQuerySearchComponent;
  let fixture: ComponentFixture<FdlEventsQuicknavQuerySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdlEventsQuicknavQuerySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdlEventsQuicknavQuerySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
