import React from 'react';
import { render } from '@testing-library/react';

import HomePage from '../HomePage';

it('example fake', () => {
  const { queryByText } = render(<HomePage />);

  expect(queryByText('Welcome'));
});
