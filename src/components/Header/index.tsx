import Logo from '../Logo';
import * as S from './styles';
import media from 'styled-media-query';
import { Login } from '@styled-icons/material';

const Header = () => (
  <S.Wrapper>
    <Logo size={media.lessThan('medium') ? 'small' : 'normal'} />
    <S.Nav href='login'>
      <S.Text>Login</S.Text>
      <S.Icon>
        <Login />
      </S.Icon>
    </S.Nav>
  </S.Wrapper>
);

export default Header;
