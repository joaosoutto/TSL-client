import { ButtonHTMLAttributes } from 'react';
import { CommentAdd } from '@styled-icons/boxicons-solid/CommentAdd';

import * as S from './styles';

type NewPostButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

const NewPostButton: React.ForwardRefRenderFunction<NewPostButtonTypes> = ({
  children,
  ...props
}) => {
  return (
    <S.Wrapper onClick={() => {}} {...props}>
      new post <CommentAdd />
    </S.Wrapper>
  );
};

export default NewPostButton;
