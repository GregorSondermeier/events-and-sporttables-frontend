import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdlEventsListComponent } from './events-list.component';

describe('FdlEventsListComponent', () => {
  let component: FdlEventsListComponent;
  let fixture: ComponentFixture<FdlEventsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdlEventsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdlEventsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
