import React from 'react';

import { renderStoreProviderWrapper } from '../__utils__/render';
import { Routes } from '../../routes';

test('should render a container', () => {
  const { container } = renderStoreProviderWrapper(<Routes />);

  expect(container).toMatchSnapshot();
});
