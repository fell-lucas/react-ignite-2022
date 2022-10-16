import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createContext } from 'use-context-selector';
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
  const { i18n } = useTranslation();

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get<Transaction[]>('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    });

    setTransactions(response.data);
  }, []);

  const createTransaction = useCallback(async (data: CreateTransactionData) => {
    const response = await api.post<Transaction>('/transactions', data);
    setTransactions((state) => [response.data, ...state]);
  }, []);

  useEffect(() => {
    void fetchTransactions();
  }, [fetchTransactions, i18n.language]);

  return (
    <TransactionsContext.Provider
      value={{ transactions, createTransaction, fetchTransactions }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
