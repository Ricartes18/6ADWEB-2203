import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Join } from './join/join';
import { About } from './about/about';
import { Partners } from './partners/partners';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'partners', component: Partners},
  {path: 'about', component: About},
  {path: 'join', component: Join}
];
