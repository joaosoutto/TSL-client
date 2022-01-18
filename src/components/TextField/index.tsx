import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

import * as S from './styles';

export type TextFieldProps = {
  onInput?: (value: string) => void;
  label: string;
  area?: boolean;
  name: string;
} & InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextField = ({
  name,
  label,
  onInput,
  area,
  ...props
}: TextFieldProps) => {
  if (area)
    return (
      <S.Wrapper>
        <S.Label htmlFor={name}> {label}</S.Label>

        <S.InputWrapper>
          <S.Area type='text' name={name} {...props} />
        </S.InputWrapper>
      </S.Wrapper>
    );

  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.InputWrapper>
        <S.Input type='text' name={name} {...props} />
      </S.InputWrapper>
    </S.Wrapper>
  );
};
export default TextField;
