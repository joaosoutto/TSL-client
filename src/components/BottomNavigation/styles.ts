import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 50px;
    padding: 0 ${theme.spacings.xlarge};
    box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.2);
    ${media.greaterThan('medium')`
  display: none;
`}
  `}
`;
