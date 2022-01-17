import { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

import getToken from '../../services/getToken';

import FormCover from '../../components/FormCover';
import FormSignIn from '../../components/FormSignIn';
import * as S from './styles';

const SignIn = (): ReactElement => {
  const history = useHistory();
  useEffect(() => {
    const userToken = getToken();

    if (userToken) {
      history.push('/');
    }
  }, [history]);

  return (
    <S.Wrapper>
      <FormCover />
      <FormSignIn />
    </S.Wrapper>
  );
};

export default SignIn;
