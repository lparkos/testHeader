import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const newHeaderPlugin = createPlugin({
  id: 'new-header',
  routes: {
    root: rootRouteRef,
  },
});

export const NewHeaderPage = newHeaderPlugin.provide(
  createRoutableExtension({
    name: 'NewHeaderPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
