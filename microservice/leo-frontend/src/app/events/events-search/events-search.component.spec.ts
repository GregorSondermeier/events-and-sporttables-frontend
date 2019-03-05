import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdlEventsSearchComponent } from './events-search.component';

describe('FdlEventsSearchComponent', () => {
  let component: FdlEventsSearchComponent;
  let fixture: ComponentFixture<FdlEventsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdlEventsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdlEventsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
