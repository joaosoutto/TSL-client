import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import bottomBg from '../../assets/bottomBg.png';

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 50px;
    padding: ${theme.spacings.small} ${theme.spacings.xlarge};
    box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.2);
    background-image: url(${bottomBg});
    ${media.greaterThan('medium')`
      display: none;
    `};
  `}
`;

export const NewPostButton = styled.button`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.primary};
    font-weight: ${theme.font.bold};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.xsmall};
    border: none;
    background-color: transparent;
  `}
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    width: 30px;
    color: ${theme.colors.primary};
  `}
`;
