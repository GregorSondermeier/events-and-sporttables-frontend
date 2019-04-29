import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsEventsCatswitcherComponent } from './events-catswitcher.component';

describe('GsEventsCatswitcherComponent', () => {
  let component: GsEventsCatswitcherComponent;
  let fixture: ComponentFixture<GsEventsCatswitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsEventsCatswitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsEventsCatswitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
