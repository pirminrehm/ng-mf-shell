import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'weather',
    component: WelcomeComponent,
  },
  {
    path: 'civil-protection',
    component: WelcomeComponent,
  },
  {
    path: 'alerts',
    component: WelcomeComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
