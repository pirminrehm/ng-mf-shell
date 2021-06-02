import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
  loadRemoteEntry('http://localhost:5000/remoteEntry.js', 'ngMfNotification'),
  loadRemoteEntry('http://localhost:5100/remoteEntry.js', 'ngMfWeather'),
])

  .catch((err) => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));
