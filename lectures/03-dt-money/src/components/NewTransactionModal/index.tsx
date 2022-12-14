import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TransactionsContext } from '../../contexts';
import { useContextSelector } from 'use-context-selector';
import { useTranslation } from 'react-i18next';

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
  const createTransaction = useContextSelector(
    TransactionsContext,
    (context) => context.createTransaction,
  );

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  });

  const { t } = useTranslation('home');

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    await createTransaction({ ...data, createdAt: new Date().toISOString() });
    reset();
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>{t('nova-transacao-capitalized')}</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            placeholder={t('descricao')}
            required
            type="text"
            {...register('description')}
          />
          <input
            placeholder={t('preco')}
            required
            type="number"
            {...register('price', { valueAsNumber: true })}
          />
          <input
            placeholder={t('categoria')}
            required
            type="text"
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
              <TransactionType onValueChange={field.onChange} value={field.value ?? ''}>
                <TransactionTypeButton value="income" variant="income">
                  <ArrowCircleUp size={24} />
                  {t('entrada')}
                </TransactionTypeButton>
                <TransactionTypeButton value="outcome" variant="outcome">
                  <ArrowCircleDown size={24} />
                  {t('saida')}
                </TransactionTypeButton>
              </TransactionType>
            )}
          />

          <button disabled={isSubmitting} type="submit">
            {t('cadastrar')}
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
