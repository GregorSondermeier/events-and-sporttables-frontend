import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdlEventsQuicknavDateSearchComponent } from './events-quicknav-date-search.component';

describe('EventsQuicknavDateSearchComponent', () => {
  let component: FdlEventsQuicknavDateSearchComponent;
  let fixture: ComponentFixture<FdlEventsQuicknavDateSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdlEventsQuicknavDateSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdlEventsQuicknavDateSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
