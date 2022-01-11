import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.small} ${theme.spacings.xxlarge};
    background-color: ${theme.colors.mainBg};
    box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.54);
    ${media.lessThan('medium')`
    justify-content: center;
  `}
  `}
`;

export const Nav = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.small};
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
  `}
`;
