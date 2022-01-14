import * as S from './styles';

export type DrawerNavigationLinkProps = {
  label: string;
  icon: React.ReactNode;
  path: string;
};

const DrawerNavigationLink = ({
  label,
  icon,
  path,
}: DrawerNavigationLinkProps) => (
  <S.Wrapper href={path}>
    <S.Icon>{icon}</S.Icon>
    <S.Label>{label}</S.Label>
  </S.Wrapper>
);

export default DrawerNavigationLink;
