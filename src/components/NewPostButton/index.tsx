import { ButtonHTMLAttributes, useState } from 'react';
import { CommentAdd } from '@styled-icons/boxicons-solid/CommentAdd';

import * as S from './styles';

type NewPostButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

const NewPostButton: React.ForwardRefRenderFunction<NewPostButtonTypes> = ({
  children,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  return (
    <S.Wrapper onClick={() => setOpen(true)} {...props}>
      new post <CommentAdd />
    </S.Wrapper>
  );
};

export default NewPostButton;
