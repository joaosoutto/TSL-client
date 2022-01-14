import Logo from '../Logo';
import * as S from './styles';

const FormCover = () => (
  <S.Wrapper>
    <S.Content>
      <Logo cover />
      <S.TextWrapper>
        <S.Text>Post, share, wall it.</S.Text>
        <S.MinorText>welcome to The Silver Wall.</S.MinorText>
      </S.TextWrapper>
    </S.Content>
  </S.Wrapper>
);

export default FormCover;
