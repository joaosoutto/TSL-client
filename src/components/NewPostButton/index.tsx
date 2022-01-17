import { ButtonHTMLAttributes } from 'react';
import { CommentAdd } from '@styled-icons/boxicons-solid/CommentAdd';

import * as S from './styles';

type NewPostButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

const NewPostButton: React.ForwardRefRenderFunction<NewPostButtonTypes> = ({
  children,
  ...props
}) => (
  <S.Wrapper onClick={() => alert('opa')} {...props}>
    new post <CommentAdd />
  </S.Wrapper>
);

export default NewPostButton;
