import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import FormButton from '.';

describe('<FormButton />', () => {
  it('should render the medium size by default', () => {
    renderWithTheme(<FormButton>Login</FormButton>);

    expect(screen.getByRole('button', { name: /Login/i })).toHaveStyle({
      height: '40px',
      'font-size': '20px',
      padding: '6px 16px',
      width: '260px',
    });
  });

  it('should render the small size', () => {
    renderWithTheme(<FormButton size='small'>Login</FormButton>);

    expect(screen.getByRole('button', { name: /Login/i })).toHaveStyle({
      height: '30px',
      'font-size': '18px',
      width: '170px',
    });
  });

  it('should render the large size', () => {
    renderWithTheme(<FormButton size='large'>Login</FormButton>);

    expect(screen.getByRole('button', { name: /Login/i })).toHaveStyle({
      height: '50px',
      'font-size': '22px',
      padding: '4px 20px',
      width: '380px',
    });
  });

  it('should render a fullWidth version', () => {
    renderWithTheme(<FormButton fullWidth>Login</FormButton>);

    expect(screen.getByRole('button', { name: /Login/i })).toHaveStyle({
      width: '100%',
    });
  });

  it('should render a disabled Button', () => {
    renderWithTheme(<FormButton disabled>Login</FormButton>);

    expect(screen.getByRole('button', { name: /Login/i })).toHaveStyle({
      background: '#eaeaea',
    });
  });
});
