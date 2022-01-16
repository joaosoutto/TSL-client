import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import Logo from '.';

describe('<Logo />', () => {
  it('should render component', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByTestId(/Logo/i)).toBeInTheDocument();
    const link = screen.getByTestId(/Logo/i);
    expect(link.closest('a')).toHaveAttribute('href', '/');
  });

  it('should render components without cover props', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/Brick icon/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /tsw/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /the silver wall/i })
    ).toBeInTheDocument();
  });

  it('should render component with cover props', () => {
    renderWithTheme(<Logo cover />);

    expect(screen.getByTestId(/Logo/i)).toBeInTheDocument();
    const link = screen.getByTestId(/Logo/i);
    expect(link.closest('a')).toHaveAttribute('href', '/');
  });

  it('should render components with cover props', () => {
    renderWithTheme(<Logo cover />);

    expect(screen.getByLabelText(/Brick icon/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /tsw/i })).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: /the silver wall/i })
    ).not.toBeInTheDocument();
  });
});
