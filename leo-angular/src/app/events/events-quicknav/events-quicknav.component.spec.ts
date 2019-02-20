import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdlEventsQuicknavComponent } from './events-quicknav.component';

describe('FdlEventsQuicknavComponent', () => {
  let component: FdlEventsQuicknavComponent;
  let fixture: ComponentFixture<FdlEventsQuicknavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdlEventsQuicknavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdlEventsQuicknavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
