import { FormEvent, useState, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import { Lock } from '@styled-icons/material-outlined';
import { User } from '@styled-icons/boxicons-regular/User';

import FormTextField from '../FormTextField';
import Logo from '../Logo';
import FormButton from '../FormButton';

import Api from '../../services/Api';
import * as S from './styles';

const FormSignIn = (): ReactElement => {
  const history = useHistory();

  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const payload = {
        username,
        password,
      };
      const response = await Api.login(payload);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', username);
      history.push('/');
    } catch (e) {
      setErrorMessage('Account not found. Sign up now!');
    }
  };

  const submitForm = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    handleLogin();
  };

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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <FormTextField
          icon={<Lock aria-label='Lock icon' />}
          name='password'
          placeholder='Password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <S.ForgotPassword>Forgot your password?</S.ForgotPassword>
      </form>
      {errorMessage && <S.Error>{errorMessage}</S.Error>}
      <FormButton onClick={(e) => submitForm(e)} fullWidth>
        Sign in now
      </FormButton>
      <S.SignUp>
        Don't have an account?{' '}
        <S.SignUpLink href='/sign-up'>Sign up</S.SignUpLink>{' '}
      </S.SignUp>
    </S.Wrapper>
  );
};

export default FormSignIn;
