import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsSportQuicknavComponent } from './sport-quicknav.component';

describe('SportQuicknavComponent', () => {
  let component: GsSportQuicknavComponent;
  let fixture: ComponentFixture<GsSportQuicknavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsSportQuicknavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsSportQuicknavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
