import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { breadcrumbsTestPlugin, BreadcrumbsTestPage } from '../src/plugin';

createDevApp()
  .registerPlugin(breadcrumbsTestPlugin)
  .addPage({
    element: <BreadcrumbsTestPage />,
    title: 'Root Page',
    path: '/breadcrumbs-test'
  })
  .render();
