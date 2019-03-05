import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdlEventsTeaserBigComponent } from './events-teaser-big.component';

describe('FdlEventsTeaserBigComponent', () => {
  let component: FdlEventsTeaserBigComponent;
  let fixture: ComponentFixture<FdlEventsTeaserBigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdlEventsTeaserBigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdlEventsTeaserBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
