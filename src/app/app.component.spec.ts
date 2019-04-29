import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GsAppComponent } from './app.component';

describe('GsAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        GsAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(GsAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Events and Sporttables'`, () => {
    const fixture = TestBed.createComponent(GsAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Events and Sporttables');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(GsAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Events and Sporttables');
  });
});
