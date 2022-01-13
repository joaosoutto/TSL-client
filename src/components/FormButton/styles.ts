import styled, { css } from 'styled-components';

import { FormButtonProps } from '.';

export type WrapperProps = Pick<FormButtonProps, 'size' | 'fullWidth'>;

const wrapperModifiers = {
  small: () => css`
    height: 30px;
    font-size: 18px;
    width: 170px;
  `,
  medium: () => css`
    height: 40px;
    font-size: 20px;
    padding: 6px 16px;
    width: 260px;
  `,
  large: () => css`
    height: 50px;
    font-size: 22px;
    padding: 4px 20px;
    width: 380px;
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
      background: #eaeaea;
      color: #2e2f42;
      border: none;
      letter-spacing: 1.2px;
      &:hover {
        background: #eaeaea;
      }
      &::after {
        background: #eaeaea;
      }
    }
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, disabled }) => css`
    cursor: pointer;
    background: ${theme.colors.primary};
    color: ${theme.colors.lightGray};
    border: none;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    font-weight: ${theme.font.bold};
    border-radius: 6px;
    position: relative;
    letter-spacing: 1.2px;
    z-index: 1;
    overflow: hidden;
    &::after {
      content: '';
      background: ${theme.colors.mainBg};
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
    ${!!size && wrapperModifiers[size]};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${disabled && wrapperModifiers.disabled()};
  `}
`;
