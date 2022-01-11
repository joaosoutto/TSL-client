import * as S from './styles';
import logo from '../../assets/logo.png';

export type LogoProps = {
  size?: 'small' | 'normal' | 'large' | 'huge';
};

const Logo = ({ size = 'normal' }: LogoProps) => (
  <S.Link href='/'>
    <S.Image src={logo} size={size} alt='The Silver Wall Logo' />
  </S.Link>
);
export default Logo;
