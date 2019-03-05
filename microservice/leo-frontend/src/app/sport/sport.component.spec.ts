import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdlSportComponent } from './sport.component';

describe('FdlSportComponent', () => {
  let component: FdlSportComponent;
  let fixture: ComponentFixture<FdlSportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdlSportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdlSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
