import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray};
    width: 140px;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 108px);
    justify-content: space-between;
    align-items: center;
    box-shadow: 3px 0px 9px 2px rgba(0, 0, 0, 0.55);
    ${media.lessThan('medium')`
        display: none;
    `};
  `}
`;

export const Navigation = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xlarge};
    width: 100%;
    gap: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;

export const LogoutButton = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    background: ${theme.colors.red};
    border: none;
    color: ${theme.colors.lightGray};
    padding: ${theme.spacings.small} ${theme.spacings.small};
    font-weight: ${theme.font.bold};
    position: relative;
    z-index: 1;
    overflow: hidden;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: ${theme.font.sizes.xsmall};
    &:hover {
      color: ${theme.colors.red};
    }
    &::after {
      content: '';
      background: ${theme.colors.lightGray};
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

export const LogoutIcon = styled.div`
  width: 24px;
  justify-self: flex-end;
`;
