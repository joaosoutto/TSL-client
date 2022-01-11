import * as S from './styles';
import { Home, Login } from '@styled-icons/material';
import BottomNavigationLink from '../BottomNavigationLink';

const BottomNavigation = () => (
  <S.Wrapper>
    <BottomNavigationLink path='/' label='Home' icon={<Home />} />
    <BottomNavigationLink path='login' label='Login' icon={<Login />} />
  </S.Wrapper>
);

export default BottomNavigation;
