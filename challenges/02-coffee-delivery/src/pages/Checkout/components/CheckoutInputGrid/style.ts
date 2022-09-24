import styled from 'styled-components';
import media from 'styled-media-query';

export const CheckoutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 16px;

  ${media.lessThan('medium')`
    grid-template-columns: repeat(1, 1fr);
    & > div {
      grid-column: 1 / 1 !important;
    }
  `}
`;
