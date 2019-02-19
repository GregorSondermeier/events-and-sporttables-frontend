import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdlEventsComponent } from './fdl-events.component';

describe('FdlEventsComponent', () => {
  let component: FdlEventsComponent;
  let fixture: ComponentFixture<FdlEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdlEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdlEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
