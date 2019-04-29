import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsSportLeaguesComponent } from './sport-leagues.component';

describe('SportLeaguesComponent', () => {
  let component: GsSportLeaguesComponent;
  let fixture: ComponentFixture<GsSportLeaguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsSportLeaguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsSportLeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
