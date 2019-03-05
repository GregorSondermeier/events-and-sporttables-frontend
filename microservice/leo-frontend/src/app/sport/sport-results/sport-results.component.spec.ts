import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdpSportResultsComponent } from './sport-results.component';

describe('SportResultsComponent', () => {
  let component: FdpSportResultsComponent;
  let fixture: ComponentFixture<FdpSportResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdpSportResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdpSportResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
