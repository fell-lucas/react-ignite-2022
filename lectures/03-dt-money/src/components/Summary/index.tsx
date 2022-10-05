import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { useContext } from 'react';
import { useTheme } from 'styled-components';
import { TransactionsContext } from '../../contexts';
import { SummaryCard, SummaryContainer } from './styles';

export function Summary() {
  const theme = useTheme();
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

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp color={theme['green-300']} size={32} />
        </header>

        <strong>{summary.income}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown color={theme['red-300']} size={32} />
        </header>

        <strong>{summary.outcome}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar color={theme.white} size={32} />
        </header>

        <strong>{summary.total}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
