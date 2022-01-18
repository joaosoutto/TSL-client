import styled, { css } from 'styled-components';

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.lightGray};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;

    > svg {
      width: 30px;
      color: #38a832;
      margin-bottom: 4px;
    }
  `}
`;

export const Cancel = styled.button`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    border: none;
    background-color: transparent;
    cursor: pointer;
  `}
`;

export const Post = styled.button`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.lightGray};
    border: none;
    background-color: #38a832;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    border-radius: 10px;
    cursor: pointer;
    font-weight: ${theme.font.bold};
    transition: all 0.2s;
    &:hover {
      background-color: #2e8a29;
    }
  `}
`;

export const Error = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.red};
    margin-bottom: 24px;
  `}
`;
