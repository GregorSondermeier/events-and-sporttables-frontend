import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdlPagenotfoundComponent } from './pagenotfound.component';

describe('FdlPagenotfoundComponent', () => {
  let component: FdlPagenotfoundComponent;
  let fixture: ComponentFixture<FdlPagenotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdlPagenotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdlPagenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
