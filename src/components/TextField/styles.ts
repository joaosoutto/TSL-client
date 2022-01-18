import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    // padding: ${theme.spacings.xsmall};
    // background: ${theme.colors.lightBlue};
    margin-bottom: 28px;
    width: 100%;
  `}
`;

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
    margin-top: ${theme.spacings.xxsmall};
    &:focus-within {
      box-shadow: 0 0 7px ${theme.colors.primary};
    }
    ${media.lessThan('medium')`
    margin-top: 0;
  `}
  `};
`;

export const Label = styled.label`
  ${({ theme }) => css`
    // background-color: red;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.darkGray};
    font-weight: ${theme.font.bold};
    letter-spacing: 1.4px;
  `};
`;

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.mainBg};
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.small} 0;
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

export const Area = styled.textarea`
  ${({ theme }) => css`
    color: ${theme.colors.mainBg};
    min-height: 150px;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.small} 0;
    padding-left: ${theme.spacings.xsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
    resize: none;
  `}
`;
