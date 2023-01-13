import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const breadcrumbsTestPlugin = createPlugin({
  id: 'breadcrumbs-test',
  routes: {
    root: rootRouteRef,
  },
});

export const BreadcrumbsTestPage = breadcrumbsTestPlugin.provide(
  createRoutableExtension({
    name: 'BreadcrumbsTestPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
