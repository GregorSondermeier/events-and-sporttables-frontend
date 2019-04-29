import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsEventsCategoriesComponent } from './events-categories.component';

describe('GsEventsCategoriesComponent', () => {
  let component: GsEventsCategoriesComponent;
  let fixture: ComponentFixture<GsEventsCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsEventsCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsEventsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
