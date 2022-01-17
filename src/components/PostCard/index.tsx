import { useEffect, useState } from 'react';
import * as S from './styles';

import { Delete } from '@styled-icons/fluentui-system-filled/Delete';
import { Edit } from '@styled-icons/boxicons-regular/Edit';

import DeleteModal from '../DeleteModal';

export type PostCardProps = {
  title?: string;
  owner: string;
  post: string;
  id: string;
};

const PostCard = ({ title, owner, post, id }: PostCardProps) => {
  const [username, setUsername] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('username');
    if (user) {
      setUsername(user);
    }
  }, []);

  return (
    <S.Wrapper data-testid='post card'>
      <S.TitleDiv>
        <S.Title>{title || 'Post title'}</S.Title>
        <S.Id>#{id}</S.Id>
      </S.TitleDiv>
      <S.Content>
        <S.Post>{post}</S.Post>
      </S.Content>
      <S.OwnerDiv>
        <S.Owner>
          posted by: <span>{owner === username ? 'me' : owner}</span>
        </S.Owner>
        {owner === username ? (
          <S.Icons>
            <S.Delete onClick={() => setOpen(true)}>
              <Delete />
            </S.Delete>
            <S.Edit>
              <Edit />
            </S.Edit>
          </S.Icons>
        ) : null}
      </S.OwnerDiv>
      <DeleteModal id={id} open={open} setOpen={setOpen} />
    </S.Wrapper>
  );
};
export default PostCard;
