import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import brickWalls from '../../assets/brickWalls.png';
import headerBg from '../../assets/headerBg.png';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 50px;
    background-color: ${theme.colors.mainBg};
    background-image: url(${headerBg});
    background-size: cover;
    box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.54);
    position: relative;
    ${media.lessThan('medium')`
    padding: ${theme.spacings.small} ${theme.spacings.large};
  `}
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
    margin-top: 8px;
    ${media.greaterThan('medium')`
    display: none;
    `}
  `}
`;

export const Nav = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.small};
    margin-top: ${theme.spacings.small};
    text-decoration: none;
    cursor: pointer;
    ${media.lessThan('medium')`
    display: none;
  `}
  `}
`;

export const Text = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
    position: relative;
    &:after {
      background: none repeat scroll 0 0 transparent;
      bottom: -7px;
      content: '';
      display: block;
      height: 2px;
      left: 50%;
      position: absolute;
      background: ${theme.colors.lightGray};
      transition: width 0.2s ease 0s, left 0.2s ease 0s;
      width: 0;
    }
    &:hover:after {
      width: 100%;
      left: 0;
    }
  `}
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
    width: 30px;
    ${media.lessThan('medium')`
    width: 22px;
    `}
  `}
`;

export const UserDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: ${theme.spacings.small};
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.xsmall};
    ${media.lessThan('medium')`
    display: none;
    `}
  `}
`;

export const User = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
    font-size: ${theme.font.sizes.medium};
    ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.xsmall};
    `}
  `}
`;

export const MenuNav = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    flex-direction: column;
    padding-top: 100px;
  `}
`;

export const MenuLink = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.bold};
    font-size: 42px;
    margin-bottom: 52px;
    transition: transform 0.3s ease-in-out;
  `}
`;

type MenuFullProps = {
  isOpen: boolean;
};

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ isOpen, theme }) => css`
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
      margin: ${theme.spacings.xxsmall};
      color: ${theme.colors.secondary};
      width: 38px;
      height: 38px;
    }

    ${User} {
      color: ${theme.colors.secondary};
      font-size: ${theme.font.sizes.xxlarge};
      margin-top: ${theme.spacings.xsmall};
    }

    ${Icon} {
      width: 38px;
      color: ${theme.colors.secondary};
    }
  `}
`;

export const UserNav = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xlarge};
    display: flex;
    gap: 8px;
    align-items: center;
    background-image: url(${headerBg});
  `}
`;

export const Logout = styled.div`
  ${({ theme }) => css`
    box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.2);
    width: 100%;
    padding: ${theme.spacings.small};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-image: url(${headerBg});
  `}
`;

export const LogoutButton = styled.button`
  ${({ theme }) => css`
    border: none;
    color: ${theme.colors.red};
    display: flex;
    align-items: center;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    gap: 8px;
    padding: ${theme.spacings.medium} ${theme.spacings.xxsmall};
    background-color: transparent;
  `}
`;

export const LogoutIcon = styled.div`
  width: 34px;
`;
