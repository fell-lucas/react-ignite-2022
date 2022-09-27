import { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export enum PaymentMethods {
  Credit = 'payment-methods.credit-card',
  Debit = 'payment-methods.debit-card',
  Cash = 'payment-methods.cash',
}

const newOrderSubmitFormSchema = z.object({
  zipCode: z.string().refine((val) => {
    const num = Number(val);
    return num > 0 && Number.isInteger(num);
  }),
  road: z.string().min(1),
  houseNumber: z.string().refine((val) => {
    const num = Number(val);
    return num > 0 && Number.isInteger(num);
  }),
  complement: z.string().nullable(),
  neighborhood: z.string().min(1),
  city: z.string().min(1),
  regionCode: z.string().min(1),
  paymentMethod: z.nativeEnum(PaymentMethods),
});

export type NewOrderSubmitType = z.infer<typeof newOrderSubmitFormSchema>;

export function CheckoutFormProvider({ children }: PropsWithChildren) {
  const newOrderForm = useForm<NewOrderSubmitType>({
    resolver: zodResolver(newOrderSubmitFormSchema),
    defaultValues: {
      city: '',
      complement: '',
      houseNumber: '',
      neighborhood: '',
      regionCode: '',
      road: '',
      zipCode: '',
      paymentMethod: undefined,
    },
    mode: 'onChange',
  });

  return <FormProvider {...newOrderForm}>{children}</FormProvider>;
}
