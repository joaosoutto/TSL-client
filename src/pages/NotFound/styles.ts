import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  width: 40%;
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
    border: 1px solid ${theme.colors.darkGray};
    width: 100%;
    margin: ${theme.spacings.xlarge} 0;
    ${media.lessThan('medium')`
      margin: ${theme.spacings.large} 0;
    `};
  `}
`;

export const Error = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};
    align-self: flex-end;
  `}
`;

export const Text = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.mainBg};
    font-size: ${theme.font.sizes.xxlarge};
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
