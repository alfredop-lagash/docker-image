import React from 'react';

import { renderStoreProviderWrapper } from '../__utils__/render';
import { Example } from '../../containers';

test('should render a container', () => {
  const { container } = renderStoreProviderWrapper(<Example />);

  expect(container).toMatchSnapshot();
});
