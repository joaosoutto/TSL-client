import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';
import { User } from '@styled-icons/boxicons-regular/User';

import DrawerNagivationLink from '.';

describe('<DrawerNagivationLink />', () => {
  it('should render component', () => {
    renderWithTheme(
      <DrawerNagivationLink
        path='home'
        label='home'
        icon={<User aria-label='Home icon' />}
      />
    );

    expect(screen.getByRole('heading', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/home icon/i)).toBeInTheDocument();
  });
});
