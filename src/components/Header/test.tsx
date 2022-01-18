import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import Header from '.';

describe('<Header />', () => {
  it('should render component without token and username', () => {
    renderWithTheme(<Header token='' username='' />);

    expect(screen.getByTestId(/header/i)).toBeInTheDocument();
  });

  it('should render components without token and username', () => {
    renderWithTheme(<Header token='' username='' />);

    expect(screen.getByTestId(/logo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/login/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
    const link = screen.getByTestId(/Sign in link/i);
    expect(link.closest('a')).toHaveAttribute('href', '/sign-in');
  });

  it('should render component with token and username', () => {
    renderWithTheme(<Header token='mock_token' username='mock_username' />);

    expect(screen.getByTestId(/header/i)).toBeInTheDocument();
  });

  it('should render components with token and username', () => {
    renderWithTheme(<Header token='mock_token' username='mock_username' />);

    expect(screen.getByTestId(/logo/i)).toBeInTheDocument();
    expect(screen.getByTestId(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/user icon/i)).toBeInTheDocument();
  });
});
