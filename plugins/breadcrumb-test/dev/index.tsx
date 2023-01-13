import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { breadcrumbTestPlugin, BreadcrumbTestPage } from '../src/plugin';

createDevApp()
  .registerPlugin(breadcrumbTestPlugin)
  .addPage({
    element: <BreadcrumbTestPage />,
    title: 'Root Page',
    path: '/breadcrumb-test'
  })
  .render();
