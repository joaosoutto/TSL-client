import { useEffect, useState } from 'react';

import getToken from '../../services/getToken';

import BottomNavigation from '../BottomNavigation';
import Drawer from '../Drawer';
import Header from '../Header';

import * as S from './styles';

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const userToken = getToken();
    setToken(userToken);
  }, []);

  return (
    <>
      <Header token={token} />
      <S.Container>
        <Drawer token={token} />
        <S.LayoutContainer>
          <S.ContentContainer>{children}</S.ContentContainer>
        </S.LayoutContainer>
      </S.Container>
      <BottomNavigation token={token} />
    </>
  );
};

export default Layout;
