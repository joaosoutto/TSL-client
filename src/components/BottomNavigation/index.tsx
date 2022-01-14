import * as S from './styles';
import { Home, Login } from '@styled-icons/material';
import { User } from '@styled-icons/boxicons-solid/User';
import { CommentAdd } from '@styled-icons/boxicons-solid/CommentAdd';

import BottomNavigationLink from '../BottomNavigationLink';

export type BottomNavigationProps = {
  token: string;
};

const BottomNavigation = ({ token }: BottomNavigationProps) => {
  return (
    <S.Wrapper data-testid='wrapper'>
      {token ? (
        <>
          <BottomNavigationLink
            path='/'
            label='Home'
            icon={<Home aria-label='Home icon' />}
          />
          <S.NewPostButton onClick={() => console.log('new post')}>
            <S.Icon>
              <CommentAdd aria-label='New post button' />
            </S.Icon>
            New Post
          </S.NewPostButton>
          <BottomNavigationLink
            path='my-posts'
            label='My Posts'
            icon={<User aria-label='User icon' />}
          />
        </>
      ) : (
        <>
          <BottomNavigationLink
            path='/'
            label='Home'
            icon={<Home aria-label='Home icon' />}
          />
          <BottomNavigationLink
            path='sign-in'
            label='Login'
            icon={<Login aria-label='Login icon' />}
          />
        </>
      )}
    </S.Wrapper>
  );
};

export default BottomNavigation;
