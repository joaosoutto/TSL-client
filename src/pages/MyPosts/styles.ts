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
      padding: 0 ${theme.spacings.xlarge};
      padding-bottom: ${theme.spacings.huge};
      gap: 40px;
    `};
  `}
`;

export const NoPosts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding-top: 20px;
  ${media.lessThan('medium')`
    padding-top: 140px;
    width: 80%;
    margin: 0 auto;
  `};
`;

export const Img = styled.img`
  width: 300px;
  ${media.lessThan('medium')`
    width: 200px;
  `};
`;

export const Text = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.xxlarge};
    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
    `};
  `}
`;
