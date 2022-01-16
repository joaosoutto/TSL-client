import FormTextField from '../FormTextField';
import Logo from '../Logo';

import { Lock } from '@styled-icons/material-outlined';
import { User } from '@styled-icons/boxicons-regular/User';

import * as S from './styles';
import FormButton from '../FormButton';

const FormSignIn = () => {
  return (
    <S.Wrapper data-testid='sign-in'>
      <S.LogoWrapper>
        <Logo color='secondary' />
      </S.LogoWrapper>
      <S.Title>Access my account</S.Title>

      <form>
        <FormTextField
          icon={<User aria-label='User icon' />}
          name='username'
          placeholder='Username'
          type='text'
        />
        <FormTextField
          icon={<Lock aria-label='Lock icon' />}
          name='password'
          placeholder='Password'
          type='password'
        />
        <S.ForgotPassword>Forgot your password?</S.ForgotPassword>
        <FormButton onClick={() => alert('logou')} fullWidth>
          Sign in now
        </FormButton>
        <S.SignUp>
          Don't have an account?{' '}
          <S.SignUpLink href='/sign-up'>Sign up</S.SignUpLink>{' '}
        </S.SignUp>
      </form>
    </S.Wrapper>
  );
};

export default FormSignIn;
