import React from 'react';
import { render } from '@testing-library/react';
import HexTime from './';

test('renders repo link', async () => {
  const { findByText } = render(<HexTime />);

  const repo = await findByText(process.env.REACT_APP_GITHUB_URL);
  expect(repo).toBeInTheDocument();
});
