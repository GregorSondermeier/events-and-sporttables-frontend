import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsSportSportsComponent } from './sport-sports.component';

describe('SportSportsComponent', () => {
  let component: GsSportSportsComponent;
  let fixture: ComponentFixture<GsSportSportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsSportSportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsSportSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
