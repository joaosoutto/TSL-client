import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import FormSignIn from '.';

describe('<FormSignIn />', () => {
  it('should render component', () => {
    renderWithTheme(<FormSignIn />);

    expect(screen.getByTestId(/sign-in/i)).toBeInTheDocument();
  });

  it('should render components', () => {
    renderWithTheme(<FormSignIn />);

    expect(screen.getByTestId(/logo/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Access my account/i })
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/sign in now/i)).toBeInTheDocument();
    const link = screen.getByText(/sign up/i);
    expect(link.closest('a')).toHaveAttribute('href', '/sign-up');
  });
});
