import { createContext, useEffect, useMemo, useState } from 'react';
import { api } from '../lib/axios';

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
}

type CreateTransactionData = Omit<Transaction, 'id'>;

interface TransactionContextData {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionData) => Promise<void>;
}

export const TransactionsContext = createContext({} as TransactionContextData);

export function TransactionsProvider({ children }: React.PropsWithChildren) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get<Transaction[]>('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    });

    setTransactions(response.data);
  }

  async function createTransaction(data: CreateTransactionData) {
    const response = await api.post<Transaction>('transactions', data);
    setTransactions((state) => [response.data, ...state]);
  }

  useEffect(() => {
    void fetchTransactions();
  }, []);

  const contextData: TransactionContextData = useMemo(
    () => ({ transactions, fetchTransactions, createTransaction }),
    [transactions],
  );

  return (
    <TransactionsContext.Provider value={contextData}>
      {children}
    </TransactionsContext.Provider>
  );
}
