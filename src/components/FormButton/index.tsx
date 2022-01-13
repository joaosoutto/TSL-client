import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type FormButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

export type FormButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
} & FormButtonTypes;

const FormButton: React.ForwardRefRenderFunction<
  S.WrapperProps,
  FormButtonProps
> = ({ children, size = 'medium', fullWidth = false, ...props }) => (
  <S.Wrapper fullWidth={fullWidth} size={size} {...props}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default FormButton;
