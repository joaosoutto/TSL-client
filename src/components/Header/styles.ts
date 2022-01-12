import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import brickWalls from '../../assets/brickWalls.png';
import headerBg from '../../assets/headerBg.png';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 50px;
  background-color: #06092b;
  background-image: url(${headerBg});
  box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.54);
  position: relative;
  ${media.lessThan('medium')`
    padding: 12px 20px;
  `}
`;

export const IconWrapper = styled.div`
  color: #eaeaea;
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
  margin-top: 8px;
  ${media.greaterThan('medium')`
    display: none;
    `}
`;

export const Nav = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 12px;
  text-decoration: none;
  cursor: pointer;
  ${media.lessThan('medium')`
    display: none;
  `}
`;

export const Text = styled.h3`
  color: #eaeaea;
  position: relative;
  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: -7px;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #eaeaea;
    transition: width 0.2s ease 0s, left 0.2s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }
`;

export const Icon = styled.div`
  color: #eaeaea;
  width: 30px;
  ${media.lessThan('medium')`
    width: 22px;
    `}
`;

export const UserDiv = styled.div`
  display: flex;
  margin-top: 12px;
  align-items: center;
  justify-content: center;
  gap: 6px;
  ${media.lessThan('medium')`
    display: none;
    `}
`;

export const User = styled.span`
  color: #eaeaea;
  font-size: 22px;
  ${media.lessThan('medium')`
    font-size: 18px;
    `}
`;

export const MenuNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  flex-direction: column;
  padding-top: 100px;
`;

export const MenuLink = styled.a`
  text-decoration: none;
  color: #054a91;
  font-weight: 700;
  font-size: 42px;
  margin-bottom: 52px;
  transition: transform 0.3s ease-in-out;
`;

type MenuFullProps = {
  isOpen: boolean;
};

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 20;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    background-image: url(${brickWalls});
    background-size: cover;

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: 4px;
      color: #fbf1e5;
      width: 38px;
      height: 38px;
    }

    ${User} {
      color: #fbf1e5;
      font-size: 50px;
      margin-top: 6px;
    }

    ${Icon} {
      width: 38px;
      color: #fbf1e5;
    }
  `}
`;

export const UserNav = styled.div`
  width: 100%;
  padding: 34px;
  display: flex;
  gap: 8px;
  align-items: center;
  background-image: url(${headerBg});
`;

export const Logout = styled.div`
  box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.2);
  width: 100%;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-image: url(${headerBg});
`;

export const LogoutButton = styled.button`
  border: none;
  color: #ff6347;
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 700;
  gap: 8px;
  padding: 22px 4px;
  background-color: transparent;
`;

export const LogoutIcon = styled.div`
  width: 34px;
`;
