import React from 'react';
import { render } from '@testing-library/react';

import { Example } from '../../components/index';

test('should render a component', () => {
  const { container } = render(
    <Example text='text' fetching={false} onFetchText={jest.fn()} />
  );

  expect(container).toMatchSnapshot();
});
