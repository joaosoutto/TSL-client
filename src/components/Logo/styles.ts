import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { LogoProps } from '.';

const wrapperModifiers = {
  primary: () => css`
    color: #eaeaea;
  `,
  secondary: () => css`
    color: #06092b;
  `,
};

export const Wrapper = styled.div<LogoProps>`
  ${({ color }) => css`
    height: 60px;
    display: flex;
    align-items: center;
    gap: 14px;
    letter-spacing: 3px;
    ${!!color && wrapperModifiers[color]}
  `}
`;

export const Icon = styled.div<LogoProps>`
  width: 36px;
  transform: rotate(-45deg);
  ${media.lessThan('medium')`
    width: 30px;
  `}
`;

export const Text = styled.div<LogoProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${media.lessThan('medium')`
    align-items: center;
  `}
`;

export const Initials = styled.h2`
  ${({ theme }) => css`
    padding-bottom: 2px;
    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
      margin-top: 0;
      padding: 0;
    `}
  `}
`;

export const Name = styled.h3`
  ${({ theme }) => css`
    font-size: 12px;
    border-top: 2px solid ${theme.colors.darkGray};
    padding-top: ${theme.spacings.xsmall};
    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`;

export const WrapperC = styled.div<LogoProps>`
  ${({ color, theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    gap: ${theme.font.sizes.large};
    letter-spacing: 3px;
    ${!!color && wrapperModifiers[color]}
  `}
`;

export const IconC = styled.div<LogoProps>`
  width: 58px;
  transform: rotate(-45deg);
`;

export const InitialsC = styled.h2`
  font-size: 68px;
`;
