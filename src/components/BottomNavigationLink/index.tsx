import * as S from './styles';

export type BottomNavigationLinkProps = {
  label: string;
  icon: React.ReactNode;
  path: string;
};

const BottomNavigationLink = ({
  label,
  icon,
  path,
}: BottomNavigationLinkProps) => (
  <S.Wrapper href={path}>
    <S.Icon>{icon}</S.Icon>
    <S.Label>{label}</S.Label>
  </S.Wrapper>
);

export default BottomNavigationLink;
