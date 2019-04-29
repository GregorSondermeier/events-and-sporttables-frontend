import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsEventsTeaserSmallComponent } from './events-teaser-small.component';

describe('GsEventsTeaserSmallComponent', () => {
  let component: GsEventsTeaserSmallComponent;
  let fixture: ComponentFixture<GsEventsTeaserSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsEventsTeaserSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsEventsTeaserSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
