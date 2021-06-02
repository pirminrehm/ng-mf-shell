import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'weather',

    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'ngMfWeather',
        exposedModule: './WeatherWidgetModule',
      }).then((m) => m.WeatherWidgetModule),
  },
  {
    path: 'civil-protection',
    component: WelcomeComponent,
  },
  {
    path: 'alerts',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'ngMfNotification',
        exposedModule: './OverviewModule',
      }).then((m) => m.OverviewModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
