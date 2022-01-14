import FormTextField from '../FormTextField';
import Logo from '../Logo';

import { Lock, Email } from '@styled-icons/material-outlined';
import { User } from '@styled-icons/boxicons-regular/User';

import * as S from './styles';
import FormButton from '../FormButton';

const FormSignIn = () => (
  <S.Wrapper>
    <S.LogoWrapper>
      <Logo color='secondary' />
    </S.LogoWrapper>
    <S.Title>Create my account</S.Title>

    <form>
      <FormTextField
        icon={<Email />}
        name='email'
        placeholder='Email'
        type='email'
      />
      <FormTextField
        icon={<User />}
        name='username'
        placeholder='Username'
        type='text'
      />
      <FormTextField
        icon={<Lock />}
        name='password'
        placeholder='Password'
        type='password'
      />
      <FormTextField
        icon={<Lock />}
        name='passwordConfirm'
        placeholder='Confirm your password'
        type='password'
      />
      <S.Space />
      <FormButton onClick={() => alert('sign up')} fullWidth>
        Sign up
      </FormButton>
      <S.SignUp>
        Already have an account?{' '}
        <S.SignUpLink href='/sign-in'>Sign in</S.SignUpLink>{' '}
      </S.SignUp>
    </form>
  </S.Wrapper>
);

export default FormSignIn;
