import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsEventsQuicknavDateSearchComponent } from './events-quicknav-date-search.component';

describe('EventsQuicknavDateSearchComponent', () => {
  let component: GsEventsQuicknavDateSearchComponent;
  let fixture: ComponentFixture<GsEventsQuicknavDateSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsEventsQuicknavDateSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsEventsQuicknavDateSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
