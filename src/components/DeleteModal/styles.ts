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
      color: ${theme.colors.red};
      margin-bottom: 4px;
    }
  `}
`;

export const Message = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.darkGray};
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      width: 32px;
      color: ${theme.colors.red};
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

export const Delete = styled.button`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.lightGray};
    border: none;
    background-color: ${theme.colors.red};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      background-color: #f53e1d;
    }
  `}
`;
