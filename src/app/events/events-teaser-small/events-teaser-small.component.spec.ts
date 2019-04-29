import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdlEventsTeaserSmallComponent } from './events-teaser-small.component';

describe('FdlEventsTeaserSmallComponent', () => {
  let component: FdlEventsTeaserSmallComponent;
  let fixture: ComponentFixture<FdlEventsTeaserSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdlEventsTeaserSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdlEventsTeaserSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
