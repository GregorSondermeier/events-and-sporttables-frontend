import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsEventsListComponent } from './events-list.component';

describe('GsEventsListComponent', () => {
  let component: GsEventsListComponent;
  let fixture: ComponentFixture<GsEventsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsEventsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsEventsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
