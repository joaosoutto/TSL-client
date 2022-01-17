import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${theme.colors.white};
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
    margin: ${theme.spacings.large} ${theme.spacings.medium};
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
    overflow: auto;
    padding: ${theme.spacings.xsmall} 0;
  `}
`;

export const OwnerDiv = styled.div`
  ${({ theme }) => css`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    padding: ${theme.spacings.small};
    box-shadow: 0px -1px 9px 2px rgba(0, 0, 0, 0.3);
  `}
`;

export const Owner = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
    justify-self: flex-end;
    > span {
      color: ${theme.colors.primary};
    }
  `}
`;

export const Icons = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
`;

export const Delete = styled.button`
  ${({ theme }) => css`
    width: 24px;
    background-color: transparent;
    border: none;
    color: ${theme.colors.red};
    cursor: pointer;
    transition: all 0.1s;
    border-radius: 50%;

    &:hover {
      background-color: ${theme.colors.lightGray};
      border-radius: 50%;
    }
  `}
`;

export const Edit = styled.button`
  ${({ theme }) => css`
    width: 24px;
    background-color: transparent;
    border: none;
    margin-top: 4px;
    color: ${theme.colors.lightBlue};
    cursor: pointer;
    transition: all 0.1s;
    border-radius: 50%;

    &:hover {
      background-color: ${theme.colors.lightGray};
      border-radius: 50%;
    }
  `}
`;
