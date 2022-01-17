// import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import * as S from './styles';

export type PostCardProps = {
  title?: string;
  owner: string;
  post: string;
  id: string;
};

const PostCard = ({ title, owner, post, id }: PostCardProps) => (
  <S.Wrapper data-testid='post card'>
    <S.TitleDiv>
      <S.Title>{title || 'Post title'}</S.Title>
      <S.Id>#{id}</S.Id>
    </S.TitleDiv>
    <S.Content>
      <S.Post>{post}</S.Post>
    </S.Content>
    <S.OwnerDiv>
      <S.Owner>posted by: {owner}</S.Owner>
    </S.OwnerDiv>
  </S.Wrapper>
);
export default PostCard;
