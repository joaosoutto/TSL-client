import styled, { css } from 'styled-components';

export const Wrapper = styled.a`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.xsmall};
    text-decoration: none;
    outline: none;
    width: 100%;
    padding: ${theme.spacings.xsmall} 0;
    transition: all 0.2s;
    color: ${theme.colors.darkGray};
    position: relative;
    z-index: 1;
    overflow: hidden;
    &:hover {
      color: ${theme.colors.mainBg};
    }
    &::after {
      content: '';
      background-color: #c4c4c4;
      position: absolute;
      z-index: -1;
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
      display: block;
      transition: all 0.25s;
    }
    &:hover::after {
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      transition: all 0.25s;
    }
    &::after {
      top: 0;
      bottom: 0;
      left: -100%;
      right: 100%;
    }
  `}
`;

export const WrapperButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.xsmall};
    text-decoration: none;
    outline: none;
    width: 100%;
    padding: ${theme.spacings.xsmall} 0;
    transition: all 0.2s;
    color: ${theme.colors.darkGray};
    position: relative;
    z-index: 1;
    overflow: hidden;
    &:hover {
      color: ${theme.colors.mainBg};
    }
    &::after {
      content: '';
      background-color: #c4c4c4;
      position: absolute;
      z-index: -1;
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
      display: block;
      transition: all 0.25s;
    }
    &:hover::after {
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      transition: all 0.25s;
    }
    &::after {
      top: 0;
      bottom: 0;
      left: -100%;
      right: 100%;
    }
  `}
`;

export const Icon = styled.div`
  width: 26px;
`;

export const Label = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
  `}
`;
