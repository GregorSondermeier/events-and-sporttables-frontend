import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsEventsComponent } from './events.component';

describe('GsEventsComponent', () => {
  let component: GsEventsComponent;
  let fixture: ComponentFixture<GsEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
