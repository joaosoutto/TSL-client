import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    padding: 0 ${theme.spacings.xxlarge};
    padding-bottom: ${theme.spacings.xlarge};
    ${media.lessThan('medium')`
      grid-template-columns: 1fr;
      padding-bottom: ${theme.spacings.huge};
    `};
  `}
`;
