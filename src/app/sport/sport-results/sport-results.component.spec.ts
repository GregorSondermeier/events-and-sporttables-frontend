import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsSportResultsComponent } from './sport-results.component';

describe('SportResultsComponent', () => {
  let component: GsSportResultsComponent;
  let fixture: ComponentFixture<GsSportResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsSportResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsSportResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
