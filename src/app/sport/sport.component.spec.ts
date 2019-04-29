import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsSportComponent } from './sport.component';

describe('GsSportComponent', () => {
  let component: GsSportComponent;
  let fixture: ComponentFixture<GsSportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsSportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
