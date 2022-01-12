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
  `}
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    width: 28px;
    color: ${theme.colors.primary};
  `}
`;

export const Label = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    color: ${theme.colors.primary};
  `}
`;
