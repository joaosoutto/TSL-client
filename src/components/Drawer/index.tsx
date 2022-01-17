import { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

import { Logout } from '@styled-icons/material';
import { Home } from '@styled-icons/material';
import { User } from '@styled-icons/boxicons-solid/User';
import { Heart } from '@styled-icons/boxicons-solid/Heart';

import DrawerNavigationLink from '../DrawerNavigationLink';

export type DrawerProps = {
  token: string;
};

const Drawer = ({ token }: DrawerProps): ReactElement => {
  const history = useHistory();

  const logout = (): void => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');

    history.push('/');
    history.go(0);
  };

  if (!token) return <div style={{ display: 'none' }} />;
  return (
    <S.Wrapper data-testid='Drawer'>
      <S.Navigation>
        <DrawerNavigationLink
          path='/'
          label='Home'
          icon={<Home aria-label='Home icon' />}
        />
        <DrawerNavigationLink
          path='/my-posts'
          label='My posts'
          icon={<User aria-label='User icon' />}
        />
        <DrawerNavigationLink
          path='/'
          label='Favorites'
          icon={<Heart aria-label='Favorites icon' />}
        />
      </S.Navigation>
      <S.LogoutButton onClick={() => logout()}>
        Logout{' '}
        <S.LogoutIcon>
          <Logout />
        </S.LogoutIcon>
      </S.LogoutButton>
    </S.Wrapper>
  );
};

export default Drawer;
