import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxlarge};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    margin: 0 auto;
    ${media.lessThan('medium')`
    padding: 0 ${theme.spacings.large};
    width: 100%;
    height: 100vh;
  `};

    > form {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  `}
`;

export const LogoWrapper = styled.div`
  align-self: flex-start;
  justify-self: flex-start;
  position: absolute;
  top: 10px;
  ${media.greaterThan('medium')`
        display: none;
    `};
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    align-self: flex-start;
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.mainBg};
    margin-bottom: ${theme.spacings.xlarge};
    margin-top: ${theme.spacings.large};
    ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.xlarge};
`}
  `}
`;

export const ForgotPassword = styled.p`
  ${({ theme }) => css`
    align-self: flex-end;
    margin: ${theme.spacings.medium} 0;
    cursor: pointer;
    color: ${theme.colors.mainBg};
    margin-bottom: ${theme.spacings.xxlarge};
  `}
`;

export const SignUp = styled.p`
  ${({ theme }) => css`
    align-self: center;
    color: ${theme.colors.mainBg};
    margin-top: ${theme.spacings.xlarge};

    > a {
      color: ${theme.colors.primary};
      text-decoration: none;
      position: relative;
      font-weight: ${theme.font.bold};
      &:after {
        background: none repeat scroll 0 0 transparent;
        bottom: -3px;
        content: '';
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: ${theme.colors.primary};
        transition: width 0.2s ease 0s, left 0.2s ease 0s;
        width: 0;
      }
      &:hover:after {
        width: 100%;
        left: 0;
      }
    }
    ${media.lessThan('medium')`
    margin-top: ${theme.spacings.large};
`}
  `}
`;

export const SignUpLink = styled.a``;
