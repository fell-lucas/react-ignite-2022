import { useContext } from 'react';
import { TransactionsContext } from '../contexts';

export function useSummary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (acc, t) => {
      if (t.type === 'income') {
        acc.income += t.price;
        acc.total += t.price;
      } else {
        acc.outcome += t.price;
        acc.total -= t.price;
      }
      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  );

  return summary;
}
