import * as S from './styles';
import { Logout } from '@styled-icons/material';
import { Home } from '@styled-icons/material';
import { User } from '@styled-icons/boxicons-solid/User';
import { Heart } from '@styled-icons/boxicons-solid/Heart';

import DrawerNavigationLink from '../DrawerNavigationLink';

export type DrawerProps = {
  token: string;
};

const Drawer = ({ token }: DrawerProps) => {
  if (!token) return null;
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
      <S.LogoutButton onClick={() => console.log('logout')}>
        Logout{' '}
        <S.LogoutIcon>
          <Logout />
        </S.LogoutIcon>
      </S.LogoutButton>
    </S.Wrapper>
  );
};

export default Drawer;
