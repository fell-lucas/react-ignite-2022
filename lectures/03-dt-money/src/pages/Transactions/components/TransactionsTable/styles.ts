import styled from 'styled-components';

export const StyledTransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

interface PriceHighlightProps {
  variant: 'income' | 'outcome';
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income' ? props.theme['green-300'] : props.theme['red-300']};
`;

export const TransactionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 1.5rem;
  gap: 1rem;

  & > div {
    border-radius: 6px;
    background: ${(props) => props.theme['gray-700']};
    padding: 20px;

    h3 {
      margin-top: 4px;
    }
  }
`;

export const TransactionsCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme['gray-500']};
  margin-top: 12px;

  & > div {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;
