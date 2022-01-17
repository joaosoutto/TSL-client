import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 160px;
    position: absolute;
    bottom: 26px;
    right: 26px;
    padding: ${theme.spacings.small};
    border-radius: 4px;
    border: none;
    background-color: #38a832;
    color: ${theme.colors.lightGray};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    transition: all 0.2s;
    z-index: 1;
    overflow: hidden;
    ${media.lessThan('medium')`
        display: none;
    `};
    &::after {
      content: '';
      background-color: #2e8a29;
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
    cursor: pointer;
    > svg {
      width: 30px;
    }
  `}
`;
