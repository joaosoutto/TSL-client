import { ReactElement, useState } from 'react';

import * as S from './styles';
import { Home, Login } from '@styled-icons/material';
import { User } from '@styled-icons/boxicons-solid/User';
import { CommentAdd } from '@styled-icons/boxicons-solid/CommentAdd';

import BottomNavigationLink from '../BottomNavigationLink';
import NewPostModal from '../NewPostModal';

export type BottomNavigationProps = {
  token: string;
};

const BottomNavigation = ({ token }: BottomNavigationProps): ReactElement => {
  const [open, setOpen] = useState(false);
  return (
    <S.Wrapper data-testid='wrapper'>
      {token ? (
        <>
          <BottomNavigationLink
            path='/'
            label='Home'
            icon={<Home aria-label='Home icon' />}
          />
          <S.NewPostButton onClick={() => setOpen(true)}>
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
          <NewPostModal open={open} setOpen={setOpen} />
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
