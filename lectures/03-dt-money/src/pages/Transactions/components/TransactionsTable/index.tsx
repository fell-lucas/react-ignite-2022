import { useContextSelector } from 'use-context-selector';
import { TransactionsContext } from '../../../../contexts';
import { dateFormatter, priceFormatter } from '../../../../utils';
import { StyledTransactionsTable, PriceHighlight } from './styles';

export function TransactionsTable() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions,
  );

  return (
    <StyledTransactionsTable>
      <tbody>
        {transactions.map((t) => (
          <tr key={t.id}>
            <td width="50%">{t.description}</td>
            <td>
              <PriceHighlight variant={t.type}>
                {t.type === 'outcome' && '- '}
                {priceFormatter.format(t.price)}
              </PriceHighlight>
            </td>
            <td>{t.category}</td>
            <td>{dateFormatter.format(new Date(t.createdAt))}</td>
          </tr>
        ))}
      </tbody>
    </StyledTransactionsTable>
  );
}
