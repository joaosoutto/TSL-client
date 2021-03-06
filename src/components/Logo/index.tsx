import * as S from './styles';
import { Bricks } from '@styled-icons/bootstrap/Bricks';

export type LogoProps = {
  cover?: boolean;
  color?: 'primary' | 'secondary';
};

const Logo = ({ cover = false, color = 'primary' }: LogoProps) => {
  if (cover) {
    return (
      <a href='/' style={{ textDecoration: 'none' }} data-testid='Logo'>
        <S.WrapperC color={color}>
          <S.IconC>
            <Bricks aria-label='Brick icon' />
          </S.IconC>
          <S.Text>
            <S.InitialsC>TSW</S.InitialsC>
          </S.Text>
        </S.WrapperC>
      </a>
    );
  }

  return (
    <a href='/' style={{ textDecoration: 'none' }} data-testid='Logo'>
      <S.Wrapper color={color}>
        <S.Icon>
          <Bricks aria-label='Brick icon' />
        </S.Icon>
        <S.Text>
          <S.Initials>TSW</S.Initials>
          <S.Name>The Silver Wall</S.Name>
        </S.Text>
      </S.Wrapper>
    </a>
  );
};
export default Logo;
