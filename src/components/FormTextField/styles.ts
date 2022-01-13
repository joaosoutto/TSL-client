import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    align-items: center;
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};
    transition: all 0.2s;
    &:focus-within {
      box-shadow: 0 0 7px ${theme.colors.primary};
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.mainBg};
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xsmall} 0;
    padding-left: ${theme.spacings.xsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 32px;
    color: ${theme.colors.primary};
    & > svg {
      width: 100%;
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
  `}
`;
