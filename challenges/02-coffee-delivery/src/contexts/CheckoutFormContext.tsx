import { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export enum PaymentMethods {
  Credit = 'Cartão de crédito',
  Debit = 'Cartão de débito',
  Cash = 'Dinheiro',
}

const newOrderSubmitFormSchema = z.object({
  zipCode: z.number().positive(),
  road: z.string().min(2),
  houseNumber: z.number().positive(),
  complement: z.string().nullable(),
  neighborhood: z.string().min(2),
  city: z.string().min(2),
  regionCode: z.string().length(2),
  paymentMethod: z.nativeEnum(PaymentMethods),
});

export type NewOrderSubmitType = z.infer<typeof newOrderSubmitFormSchema>;

export function CheckoutFormProvider({ children }: PropsWithChildren) {
  const newOrderForm = useForm<NewOrderSubmitType>({
    resolver: zodResolver(newOrderSubmitFormSchema),
    defaultValues: {
      city: '',
      complement: '',
      houseNumber: undefined,
      neighborhood: '',
      regionCode: '',
      road: '',
      zipCode: undefined,
      paymentMethod: undefined,
    },
    mode: 'onChange',
  });

  return <FormProvider {...newOrderForm}>{children}</FormProvider>;
}
