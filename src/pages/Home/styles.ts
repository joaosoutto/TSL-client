import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px 36px;
    padding: 0 ${theme.spacings.xxlarge};
    padding-bottom: ${theme.spacings.xlarge};
    ${media.lessThan('medium')`
      grid-template-columns: 1fr;
      padding: 0 ${theme.spacings.xlarge};
      padding-bottom: ${theme.spacings.huge};
      gap: 40px;
    `};
  `}
`;

export const NoPostWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-self: center;
  height: 70vh;
  padding-top: 40px;
  ${media.lessThan('medium')`
    width: 80%;
  `};
`;

export const Divider = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray};
    width: 100%;
    margin: ${theme.spacings.medium} 0;
    ${media.lessThan('medium')`
      margin: ${theme.spacings.large} 0;
    `};
  `}
`;

export const Text = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.mainBg};
    font-size: ${theme.font.sizes.xlarge};
    margin-bottom: ${theme.spacings.large};
    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.large};
    `};
  `}
`;

export const Figure = styled.img`
  width: 200px;
  ${media.lessThan('medium')`
    width: 160px;
  `};
`;
