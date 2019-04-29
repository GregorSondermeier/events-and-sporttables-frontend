import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsEventsQuicknavComponent } from './events-quicknav.component';

describe('GsEventsQuicknavComponent', () => {
  let component: GsEventsQuicknavComponent;
  let fixture: ComponentFixture<GsEventsQuicknavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsEventsQuicknavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsEventsQuicknavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
