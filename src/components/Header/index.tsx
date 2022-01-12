import { useEffect, useState } from 'react';
import media from 'styled-media-query';

import Logo from '../Logo';

import * as S from './styles';
import { Login, Logout } from '@styled-icons/material';
import { User } from '@styled-icons/boxicons-solid/User';
import { Menu } from '@styled-icons/entypo/Menu';
import { Close } from '@styled-icons/material-outlined/Close';

export type HeaderProps = {
  token: string;
};

const Header = ({ token }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const username = 'TokenTest';

  if (
    window.location.pathname === '/login' ||
    window.location.pathname === '/sign-in'
  )
    return null;

  return (
    <S.Wrapper>
      <Logo size={media.lessThan('medium') ? 'small' : 'normal'} />

      {token ? (
        <>
          <S.UserDiv>
            <S.Icon>
              <User />
            </S.Icon>
            <S.User>{username}</S.User>
          </S.UserDiv>
          <S.IconWrapper onClick={() => setIsOpen(true)}>
            <Menu aria-label='Open Menu' />
          </S.IconWrapper>
        </>
      ) : (
        <S.Nav href='login'>
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
          <S.MenuLink href='my-posts'>My Posts</S.MenuLink>
        </S.MenuNav>
        <S.Logout>
          <S.LogoutButton onClick={() => console.log('logout')}>
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
