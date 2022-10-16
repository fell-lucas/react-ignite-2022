import { useContextSelector } from 'use-context-selector';
import { TransactionsContext } from '../../../../contexts';
import { useTextFormat } from '../../../../hooks';
import { StyledTransactionsTable, PriceHighlight } from './styles';

export function TransactionsTable() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions,
  );
  const { price, date } = useTextFormat();

  return (
    <StyledTransactionsTable>
      <tbody>
        {transactions.map((t) => (
          <tr key={t.id}>
            <td width="50%">{t.description}</td>
            <td>
              <PriceHighlight variant={t.type}>
                {t.type === 'outcome' && '- '}
                {price.format(t.price)}
              </PriceHighlight>
            </td>
            <td>{t.category}</td>
            <td>{date.format(new Date(t.createdAt))}</td>
          </tr>
        ))}
      </tbody>
    </StyledTransactionsTable>
  );
}
