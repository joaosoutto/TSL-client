import { useState, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import Logo from '../Logo';

import * as S from './styles';
import { Login, Logout } from '@styled-icons/material';
import { User } from '@styled-icons/boxicons-solid/User';
import { Menu } from '@styled-icons/entypo/Menu';
import { Close } from '@styled-icons/material-outlined/Close';

export type HeaderProps = {
  token: string;
  username: string;
};

const Header = ({ token, username }: HeaderProps): ReactElement => {
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);

  const logout = (): void => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');

    history.push('/');
    history.go(0);
  };

  return (
    <S.Wrapper data-testid='Header'>
      <Logo />

      {token ? (
        <>
          <S.UserDiv onClick={() => history.push('/my-posts')}>
            <S.Icon>
              <User aria-label='User icon' />
            </S.Icon>
            <S.User data-testid='Username'>{username}</S.User>
          </S.UserDiv>
          <S.IconWrapper onClick={() => setIsOpen(true)}>
            <Menu aria-label='Open Menu' />
          </S.IconWrapper>
        </>
      ) : (
        <S.Nav data-testid='Sign in link' href='/sign-in'>
          <S.Text>Login</S.Text>
          <S.Icon>
            <Login aria-label='Login' />
          </S.Icon>
        </S.Nav>
      )}

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <Close aria-label='Close menu' onClick={() => setIsOpen(false)} />
        <S.UserNav>
          <S.Icon>
            <User />
          </S.Icon>
          <S.User>{username}</S.User>
        </S.UserNav>
        <S.MenuNav>
          <S.MenuLink href='/'>Home</S.MenuLink>
          <S.MenuLink href='/my-posts'>My Posts</S.MenuLink>
        </S.MenuNav>
        <S.Logout>
          <S.LogoutButton onClick={() => logout()}>
            Logout{' '}
            <S.LogoutIcon>
              <Logout />
            </S.LogoutIcon>
          </S.LogoutButton>
        </S.Logout>
      </S.MenuFull>
    </S.Wrapper>
  );
};

export default Header;
