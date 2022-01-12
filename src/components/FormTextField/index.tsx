import { useState, InputHTMLAttributes } from 'react';

import * as S from './styles';

export type FormTextFieldProps = {
  onInput?: (value: string) => void;
  icon?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

const FormTextField = ({
  icon,
  name,
  onInput,
  ...props
}: FormTextFieldProps) => {
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    !!onInput && onInput(newValue);
  };

  return (
    <S.Wrapper>
      <S.InputWrapper>
        {icon && <S.Icon>{icon}</S.Icon>}
        <S.Input
          type='text'
          name={name}
          onChange={onChange}
          value={value}
          {...props}
        />
      </S.InputWrapper>
    </S.Wrapper>
  );
};
export default FormTextField;
