import * as S from './styles';

import { Downloading } from '@styled-icons/material-outlined/Downloading';

const Loading = () => (
  <S.Wrapper>
    <h1>Loading...</h1>
    <Downloading />
  </S.Wrapper>
);

export default Loading;
