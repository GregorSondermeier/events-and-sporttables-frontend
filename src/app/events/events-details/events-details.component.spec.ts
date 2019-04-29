import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsEventsDetailsComponent } from './events-details.component';

describe('GsEventsDetailsComponent', () => {
  let component: GsEventsDetailsComponent;
  let fixture: ComponentFixture<GsEventsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsEventsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsEventsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
