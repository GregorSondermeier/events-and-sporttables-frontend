import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdpEventsCatswitcherComponent } from './fdp-events-catswitcher.component';

describe('FdpEventsCatswitcherComponent', () => {
  let component: FdpEventsCatswitcherComponent;
  let fixture: ComponentFixture<FdpEventsCatswitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdpEventsCatswitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdpEventsCatswitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
