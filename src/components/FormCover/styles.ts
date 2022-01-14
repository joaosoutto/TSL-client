import styled, { css } from 'styled-components';
import formBg from '../../assets/formBg.png';
import media from 'styled-media-query';

export const Wrapper = styled.main`
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  height: 100vh;
  background-image: url(${formBg});
  background-size: cover;
  ${media.lessThan('medium')`
    display: none;
  `};
`;

export const Content = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    width: 360px;
    border-top: 1px solid ${theme.colors.lightGray};
    margin-top: 36px;
    padding-top: 14px;
  `}
`;

export const Text = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
    font-size: ${theme.font.sizes.xlarge};
    margin: ${theme.spacings.medium} 0;
  `}
`;

export const MinorText = styled.h5`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
    font-size: ${theme.font.sizes.xxsmall};
    margin: ${theme.spacings.medium} 0;
  `}
`;
