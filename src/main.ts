import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
  loadRemoteEntry({ type: 'module', remoteEntry: 'http://localhost:5000/remoteEntry.js' }),
  loadRemoteEntry({ type: 'module', remoteEntry: 'http://localhost:5100/remoteEntry.js' }),
])

  .catch((err) => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));
