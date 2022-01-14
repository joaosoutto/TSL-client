import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import Drawer from '.';

describe('<Drawer />', () => {
  it('should not render component without token', () => {
    renderWithTheme(<Drawer token='' />);

    expect(screen.queryByTestId(/drawer/i)).not.toBeInTheDocument();
  });

  it('should render component with token', () => {
    renderWithTheme(<Drawer token='mock_token' />);

    expect(screen.queryByTestId(/drawer/i)).toBeInTheDocument();
  });

  it('should render Home link with token', () => {
    renderWithTheme(<Drawer token='mock_token' />);

    expect(screen.getByLabelText(/home icon/i)).toBeInTheDocument();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    const link = screen.getByLabelText(/home icon/i);
    expect(link.closest('a')).toHaveAttribute('href', '/');
  });

  it('should render My Posts link with token', () => {
    renderWithTheme(<Drawer token='mock_token' />);

    expect(screen.getByLabelText(/user icon/i)).toBeInTheDocument();
    expect(screen.getByText(/my posts/i)).toBeInTheDocument();
    const link = screen.getByLabelText(/user icon/i);
    expect(link.closest('a')).toHaveAttribute('href', '/my-posts');
  });

  it('should render Favorites link with token', () => {
    renderWithTheme(<Drawer token='mock_token' />);

    expect(screen.getByLabelText(/favorites icon/i)).toBeInTheDocument();
    expect(screen.getByText(/favorites/i)).toBeInTheDocument();
    const link = screen.getByLabelText(/favorites icon/i);
    expect(link.closest('a')).toHaveAttribute('href', '/');
  });

  it('should render Logout button with token', () => {
    renderWithTheme(<Drawer token='mock_token' />);

    expect(screen.getByText(/logout/i)).toBeInTheDocument();
  });
});
