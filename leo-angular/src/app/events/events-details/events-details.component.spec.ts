import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdlEventsDetailsComponent } from './events-details.component';

describe('FdlEventsDetailsComponent', () => {
  let component: FdlEventsDetailsComponent;
  let fixture: ComponentFixture<FdlEventsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdlEventsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdlEventsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
