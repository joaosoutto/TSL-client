import Logo from '../Logo';
import * as S from './styles';

const FormCover = () => (
  <S.Wrapper>
    <Logo size='huge' />
    <S.TextWrapper>
      <S.Text>Post, share, wall it.</S.Text>
      <S.MinorText>welcome to the silver wall.</S.MinorText>
    </S.TextWrapper>
  </S.Wrapper>
);

export default FormCover;
