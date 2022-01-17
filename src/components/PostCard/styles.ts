import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${theme.colors.white};
    // border: 2px solid green;
    max-height: 300px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  `}
`;

export const TitleDiv = styled.div`
  ${({ theme }) => css`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.medium};
    background-color: ${theme.colors.mainBg};
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.lightGray};
  `}
`;

export const Id = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.primary};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    // background-color: gray;
    margin: ${theme.spacings.large} ${theme.spacings.medium};
    // padding: ${theme.spacings.large};
    overflow: auto;
    // max-height: 300px;
    height: 150px;
    align-items: center;
    ${media.lessThan('medium')`
    height: 100px;


  `};
  `}
`;
export const Post = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.darkGray};
  `}
`;

export const OwnerDiv = styled.div`
  ${({ theme }) => css`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: ${theme.spacings.large};
    // background-color: ${theme.colors.mainBg};
    box-shadow: 0px -1px 9px 2px rgba(0, 0, 0, 0.3);
  `}
`;
export const Owner = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primary};
  `}
`;
