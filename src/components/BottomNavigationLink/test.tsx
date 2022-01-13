import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';
import { User } from '@styled-icons/boxicons-regular/User';

import BottomNavigationLink from '.';

describe('<BottomNavigationLink />', () => {
  it('should render component', () => {
    renderWithTheme(
      <BottomNavigationLink
        path='login'
        label='Login'
        icon={<User aria-label='Icon' />}
      />
    );

    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/icon/i)).toBeInTheDocument();
  });
});
