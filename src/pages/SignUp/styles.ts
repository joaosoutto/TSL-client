import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
  `};
`;
