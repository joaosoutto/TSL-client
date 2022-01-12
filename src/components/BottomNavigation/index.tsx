import * as S from './styles';
import { Home, Login } from '@styled-icons/material';
import { User } from '@styled-icons/boxicons-solid/User';
import { CommentAdd } from '@styled-icons/boxicons-solid/CommentAdd';

import BottomNavigationLink from '../BottomNavigationLink';

const BottomNavigation = () => {
  const token = true;

  return (
    <S.Wrapper>
      {token ? (
        <>
          <BottomNavigationLink path='/' label='Home' icon={<Home />} />
          <S.NewPostButton onClick={() => console.log('new post')}>
            <S.Icon>
              <CommentAdd />
            </S.Icon>
            New Post
          </S.NewPostButton>
          <BottomNavigationLink
            path='my-posts'
            label='My Posts'
            icon={<User />}
          />
        </>
      ) : (
        <>
          <BottomNavigationLink path='/' label='Home' icon={<Home />} />
          <BottomNavigationLink path='login' label='Login' icon={<Login />} />
        </>
      )}
    </S.Wrapper>
  );
};

export default BottomNavigation;
