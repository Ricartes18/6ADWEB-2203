import { Routes } from '@angular/router';
import { CustomForm } from './custom-form/custom-form';
import { TemplateDemo } from './template-demo/template-demo';
import { ReactiveDemo } from './reactive-demo/reactive-demo';


export const routes: Routes = [
  { path: '', component: TemplateDemo},
  { path: 'reactive', component: ReactiveDemo},
  { path: 'custom', component: CustomForm}
];
