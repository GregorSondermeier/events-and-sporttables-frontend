import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdlSporttablesComponent } from './sporttables.component';

describe('FdlSporttablesComponent', () => {
  let component: FdlSporttablesComponent;
  let fixture: ComponentFixture<FdlSporttablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdlSporttablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdlSporttablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
