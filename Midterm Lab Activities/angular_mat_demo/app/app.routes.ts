import { Routes } from '@angular/router';
import { Register } from './register/register';
import { Challenge } from './challenge/challenge';

export const routes: Routes = [
  {path: '', component: Register},
  {path: 'challenge', component: Challenge}
];
