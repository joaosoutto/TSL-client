import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.xsmall};

    > svg {
      width: 40px;
    }
  `}
`;
