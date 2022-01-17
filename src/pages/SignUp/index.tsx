import { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

import getToken from '../../services/getToken';

import FormCover from '../../components/FormCover';
import FormSignUp from '../../components/FormSignUp';
import * as S from './styles';

const SignUp = (): ReactElement => {
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
      <FormSignUp />
    </S.Wrapper>
  );
};

export default SignUp;
