import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsEventsTeaserBigComponent } from './events-teaser-big.component';

describe('GsEventsTeaserBigComponent', () => {
  let component: GsEventsTeaserBigComponent;
  let fixture: ComponentFixture<GsEventsTeaserBigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsEventsTeaserBigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsEventsTeaserBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
