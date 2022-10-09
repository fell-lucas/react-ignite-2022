import { MagnifyingGlass } from 'phosphor-react';
import { SearchFormContainer } from './styles';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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

  async function handleSearchTransactions(data: SearchFormInput) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input placeholder="Busque por transações" type="text" {...register('query')} />

      <button disabled={isSubmitting} type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
