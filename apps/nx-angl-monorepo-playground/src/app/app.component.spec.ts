import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, CvComponent, HeaderComponent, RouterModule.forRoot([])],
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hi There');
  });

  it(`should have as title 'nx-angl-monorepo-playground'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('nx-angl-monorepo-playground');
  });
});
