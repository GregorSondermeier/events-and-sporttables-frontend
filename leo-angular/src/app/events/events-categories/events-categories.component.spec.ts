import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdlEventsCategoriesComponent } from './events-categories.component';

describe('FdlEventsCategoriesComponent', () => {
  let component: FdlEventsCategoriesComponent;
  let fixture: ComponentFixture<FdlEventsCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdlEventsCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdlEventsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
