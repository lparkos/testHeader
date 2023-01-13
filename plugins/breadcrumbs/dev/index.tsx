import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { breadcrumbsPlugin, BreadcrumbsPage } from '../src/plugin';

createDevApp()
  .registerPlugin(breadcrumbsPlugin)
  .addPage({
    element: <BreadcrumbsPage />,
    title: 'Root Page',
    path: '/breadcrumbs'
  })
  .render();
