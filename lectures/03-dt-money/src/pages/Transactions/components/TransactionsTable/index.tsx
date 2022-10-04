import { useContext } from 'react';
import { TransactionsContext } from '../../../../contexts';
import { StyledTransactionsTable, PriceHighlight } from './styles';

export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <StyledTransactionsTable>
      <tbody>
        {transactions.map((t) => (
          <tr key={t.id}>
            <td width="50%">{t.description}</td>
            <td>
              <PriceHighlight variant={t.type}>{t.price}</PriceHighlight>
            </td>
            <td>{t.category}</td>
            <td>{t.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </StyledTransactionsTable>
  );
}
