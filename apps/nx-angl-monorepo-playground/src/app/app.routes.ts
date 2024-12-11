import { Route } from '@angular/router';
import { PlaygroundComponent } from './playground/playground.component';
import { CvComponent } from './cv/cv.component';
import { BlogComponent } from './blog/blog.component';
import { CoursesComponent } from './courses/courses.component';

export const appRoutes: Route[] = [
  { path: '', component: CvComponent, pathMatch: 'full' },
  { path: 'courses', component: CoursesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'playground', component: PlaygroundComponent },
  { path: '**', redirectTo: '' },
];
