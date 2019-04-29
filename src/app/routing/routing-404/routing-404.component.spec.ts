import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Common404Component } from './common404.component';

describe('Routing404Component', () => {
  let component: Common404Component;
  let fixture: ComponentFixture<Common404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Common404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Common404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
