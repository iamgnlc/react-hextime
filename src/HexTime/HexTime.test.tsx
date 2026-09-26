import { render } from '@testing-library/react';
import HexTime from './';

describe('HexTime', () => {
  test('renders time', () => {
    const { container } = render(<HexTime />);

    expect(container.firstChild).toHaveClass('hex-time');
  });

  test('renders repo link', async () => {
    const { findByText } = render(<HexTime />);

    const repo = await findByText(import.meta.env.VITE_GITHUB_URL ?? '');
    expect(repo).toBeInTheDocument();
  });
});
