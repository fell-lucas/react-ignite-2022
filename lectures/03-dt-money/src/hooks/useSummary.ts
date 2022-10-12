import { useMemo } from 'react';
import { useContextSelector } from 'use-context-selector';
import { TransactionsContext } from '../contexts';

export function useSummary() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions,
  );

  const summary = useMemo(
    () =>
      transactions.reduce(
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
      ),
    [transactions],
  );

  return summary;
}
