import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const breadcrumbsPlugin = createPlugin({
  id: 'breadcrumbs',
  routes: {
    root: rootRouteRef,
  },
});

export const BreadcrumbsPage = breadcrumbsPlugin.provide(
  createRoutableExtension({
    name: 'BreadcrumbsPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
