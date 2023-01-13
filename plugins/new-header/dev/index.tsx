import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { newHeaderPlugin, NewHeaderPage } from '../src/plugin';

createDevApp()
  .registerPlugin(newHeaderPlugin)
  .addPage({
    element: <NewHeaderPage />,
    title: 'Root Page',
    path: '/new-header'
  })
  .render();
