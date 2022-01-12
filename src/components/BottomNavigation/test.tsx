import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import BottomNavigation from '.';

describe('<BottomNavigation />', () => {
  it('should render BottomNavigation without token', () => {
    renderWithTheme(<BottomNavigation token='' />);

    expect(screen.getByLabelText(/home/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/login/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/home icon/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/login icon/i)).toBeInTheDocument();
  });

  it('should render BottomNavigation with token', () => {
    renderWithTheme(<BottomNavigation token='mock_token' />);

    expect(screen.getByLabelText(/home/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/home icon/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/user icon/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/new post button/i)).toBeInTheDocument();
  });

  it('should change path when click Home', () => {
    renderWithTheme(<BottomNavigation token='' />);

    const link = screen.getByLabelText(/home/i);
    expect(link.closest('a')).toHaveAttribute('href', '/');
  });

  it('should change path when click Login', () => {
    renderWithTheme(<BottomNavigation token='' />);

    const link = screen.getByLabelText(/login/i);
    expect(link.closest('a')).toHaveAttribute('href', 'login');
  });

  it('should change path when click My Posts', () => {
    renderWithTheme(<BottomNavigation token='mock_token' />);

    const link = screen.getByLabelText(/user icon/i);
    expect(link.closest('a')).toHaveAttribute('href', 'my-posts');
  });

  it('should not render Login when logged in', () => {
    renderWithTheme(<BottomNavigation token='mock_token' />);

    expect(screen.queryByLabelText(/login/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/login icon/i)).not.toBeInTheDocument();
  });

  it('should not render My Posts and New Post when logged out', () => {
    renderWithTheme(<BottomNavigation token='' />);

    expect(screen.queryByLabelText(/user icon/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/new post button/i)).not.toBeInTheDocument();
  });
});
