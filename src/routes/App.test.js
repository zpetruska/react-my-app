import { render, screen } from '@testing-library/react';
import Posts from './Posts';

test('renders learn react link', () => {
  render(<Posts />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
