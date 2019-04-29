import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FdlAppComponent } from './app.component';

describe('FdlAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        FdlAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FdlAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Events and Sporttables'`, () => {
    const fixture = TestBed.createComponent(FdlAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Events and Sporttables');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(FdlAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Events and Sporttables');
  });
});
