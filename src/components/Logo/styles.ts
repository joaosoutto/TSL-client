import styled, { css } from 'styled-components';
import { LogoProps } from '.';

const wrapperModifiers = {
  small: () => css`
    width: 140px;
    height: 80px;
    cursor: pointer;
  `,
  normal: () => css`
    width: 180px;
    height: 100px;
    cursor: pointer;
  `,
  large: () => css`
    width: 240px;
    height: 140px;
    cursor: pointer;
  `,
  huge: () => css`
    width: 320px;
    height: 190px;
    cursor: pointer;
  `,
};

export const Image = styled.img<LogoProps>`
  ${({ size }) => css`
    ${!!size && wrapperModifiers[size]}
  `}
`;

export const Link = styled.a``;
