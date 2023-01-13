import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const breadcrumbTestPlugin = createPlugin({
  id: 'breadcrumb-test',
  routes: {
    root: rootRouteRef,
  },
});

export const BreadcrumbTestPage = breadcrumbTestPlugin.provide(
  createRoutableExtension({
    name: 'BreadcrumbTestPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);

