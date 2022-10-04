import { createContext, useEffect, useMemo, useState } from 'react';

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
}

interface TransactionContextData {
  transactions: Transaction[];
}

export const TransactionsContext = createContext({} as TransactionContextData);

export function TransactionsProvider({ children }: React.PropsWithChildren) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function loadTransactions() {
    const response = await fetch('http://localhost:3333/transactions');
    const data = (await response.json()) as Transaction[];
    setTransactions(data);
  }

  useEffect(() => {
    void loadTransactions();
  }, []);

  const contextData: TransactionContextData = useMemo(
    () => ({ transactions }),
    [transactions],
  );

  return (
    <TransactionsContext.Provider value={contextData}>
      {children}
    </TransactionsContext.Provider>
  );
}
