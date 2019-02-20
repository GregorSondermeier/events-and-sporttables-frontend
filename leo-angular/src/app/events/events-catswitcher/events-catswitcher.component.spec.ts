import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdlEventsCatswitcherComponent } from './events-catswitcher.component';

describe('FdlEventsCatswitcherComponent', () => {
  let component: FdlEventsCatswitcherComponent;
  let fixture: ComponentFixture<FdlEventsCatswitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdlEventsCatswitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdlEventsCatswitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
