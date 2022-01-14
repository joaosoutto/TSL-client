import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightBg};
    display: flex;
    height: calc(100vh - 108px;);
  `}
`;

export const LayoutContainer = styled.div`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    max-height: calc(100vh - 108px);
    overflow-y: auto;
    overflow-x: hidden;
    text-align: center;
    padding: 40px 0 150px 0;
  `}
`;

export const ContentContainer = styled.div`
  display: inline-block;
  width: 100%;
  margin-right: 64px;
`;
