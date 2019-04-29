import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsEventsSearchComponent } from './events-search.component';

describe('GsEventsSearchComponent', () => {
  let component: GsEventsSearchComponent;
  let fixture: ComponentFixture<GsEventsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsEventsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsEventsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
