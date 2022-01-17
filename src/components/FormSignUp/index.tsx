import { FormEvent, useContext, useState } from 'react';

import { Lock, Email } from '@styled-icons/material-outlined';
import { User } from '@styled-icons/boxicons-regular/User';

import FormTextField from '../FormTextField';
import FormButton from '../FormButton';
import Logo from '../Logo';

import { AppContext } from '../../context/AppContext';
import Api from '../../services/Api';

import * as S from './styles';

const FormSignUp = () => {
  const { loading, setLoading } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const resetForm = () => {
    setEmail('');
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };

  const checkForm = async () => {
    setErrorMessage('');
    setSuccess('');

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!email || !username || !password || !confirmPassword) {
      setLoading(false);
      return setErrorMessage('Please, fill in the fields.');
    }
    if (email.length > 1 && !emailRegex.test(email)) {
      setLoading(false);
      return setErrorMessage('Invalid email format.');
    } else if (username.length > 1 && username.length < 4) {
      setLoading(false);
      return setErrorMessage('Username must contain at least 4 characters.');
    } else if (password.length > 1 && password.length < 6) {
      setLoading(false);
      return setErrorMessage('Password must contain at least 6 characters.');
    } else if (confirmPassword && password !== confirmPassword) {
      setLoading(false);
      return setErrorMessage('Password not matching.');
    } else {
      try {
        const payload = {
          email,
          username,
          password,
        };
        const response = await Api.createUser(payload);
        resetForm();
        setSuccess(response.data.success);
        setLoading(false);
      } catch (e) {
        setErrorMessage('Account already in use. Please, try again.');
        setLoading(false);
      }
    }
  };

  const submitForm = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    checkForm();
  };

  return (
    <S.Wrapper data-testid='sign-up'>
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
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <FormTextField
          icon={<User />}
          name='username'
          placeholder='Username'
          type='text'
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <FormTextField
          icon={<Lock />}
          name='password'
          placeholder='Password'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <FormTextField
          icon={<Lock />}
          name='passwordConfirm'
          placeholder='Confirm your password'
          type='password'
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        <S.Space />
        {errorMessage && <S.Error>{errorMessage}</S.Error>}
        {success && <S.Success>{`${success} Please sign in now.`}</S.Success>}
        {loading && <S.Loading>please wait...</S.Loading>}
      </form>
      <FormButton disabled={loading} onClick={(e) => submitForm(e)} fullWidth>
        Sign up
      </FormButton>
      <S.SignUp>
        Already have an account?{' '}
        <S.SignUpLink href='/sign-in'>Sign in</S.SignUpLink>{' '}
      </S.SignUp>
    </S.Wrapper>
  );
};

export default FormSignUp;
