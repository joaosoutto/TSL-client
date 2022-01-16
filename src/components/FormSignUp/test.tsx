import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import FormSignUp from '.';

describe('<FormSignUp />', () => {
  it('should render component', () => {
    renderWithTheme(<FormSignUp />);

    expect(screen.getByTestId(/sign-up/i)).toBeInTheDocument();
  });

  it('should render components', () => {
    renderWithTheme(<FormSignUp />);

    expect(screen.getByTestId(/logo/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Create my account/i })
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument();
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
    const link = screen.getByText(/sign in/i);
    expect(link.closest('a')).toHaveAttribute('href', '/sign-in');
  });
});
