import { useEffect, useState } from 'react';
import { StyledTransactionsTable, PriceHighlight } from './styles';

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function loadTransactions() {
    const response = await fetch('http://localhost:3333/transactions');
    const data = (await response.json()) as Transaction[];
    setTransactions(data);
  }

  useEffect(() => {
    void loadTransactions();
  }, []);

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
