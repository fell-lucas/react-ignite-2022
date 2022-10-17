import { MagnifyingGlass } from 'phosphor-react';
import { SearchFormContainer } from './styles';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TransactionsContext } from '../../../../contexts';
import { useContextSelector } from 'use-context-selector';
import { useTranslation } from 'react-i18next';

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({ resolver: zodResolver(searchFormSchema) });
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => context.fetchTransactions,
  );
  const { t } = useTranslation('home');

  async function handleSearchTransactions(data: SearchFormInput) {
    await fetchTransactions(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        placeholder={t('busque-por-transacoes')}
        type="text"
        {...register('query')}
      />

      <button disabled={isSubmitting} type="submit">
        <MagnifyingGlass size={20} />
        <span>{t('buscar')}</span>
      </button>
    </SearchFormContainer>
  );
}
