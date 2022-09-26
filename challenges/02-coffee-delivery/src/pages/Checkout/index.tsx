import { useContext } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { CartContext } from '../../contexts';
import {
  CheckoutAddress,
  CheckoutCartItem,
  CheckoutConfirm,
  CheckoutPaymentMethods,
} from './components';
import {
  CheckoutConfirmButton,
  CheckoutContainer,
  CheckoutNoItemsButton,
  LeftContainer,
  RightContainer,
  SectionTitle,
} from './styles';
import { zodResolver } from '@hookform/resolvers/zod';
import { PaymentMethods } from '../../reducers';

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

export function Checkout() {
  const { cartState } = useContext(CartContext);
  const navigate = useNavigate();
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

  const { formState, handleSubmit, reset } = newOrderForm;

  function handleNewOrderSubmit(data: NewOrderSubmitType) {
    console.log(data);

    reset();
    navigate('/success', { replace: true });
  }

  return (
    <CheckoutContainer>
      {cartState.totalItems > 0 ? (
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        <form onSubmit={handleSubmit(handleNewOrderSubmit)}>
          <div>
            <SectionTitle>Complete seu pedido</SectionTitle>
            <FormProvider {...newOrderForm}>
              <LeftContainer>
                <CheckoutAddress />
              </LeftContainer>
              <LeftContainer>
                <CheckoutPaymentMethods />
              </LeftContainer>
            </FormProvider>
          </div>
          <div>
            <SectionTitle>Cafés selecionados</SectionTitle>
            <RightContainer>
              <>
                {cartState.coffeeList.map((coffee) => (
                  <CheckoutCartItem coffee={coffee} key={coffee.id} />
                ))}
                <CheckoutConfirm />
              </>

              <CheckoutConfirmButton
                disabled={!formState.isDirty || !formState.isValid}
                type="submit"
              >
                Confirmar pedido
              </CheckoutConfirmButton>
            </RightContainer>
          </div>
        </form>
      ) : (
        <div style={{ width: '100vw' }}>
          <SectionTitle>Você não possui nenhum item no carrinho 😥</SectionTitle>
          <NavLink to="/">
            <CheckoutNoItemsButton>Voltar e adicionar mais itens</CheckoutNoItemsButton>
          </NavLink>
        </div>
      )}
    </CheckoutContainer>
  );
}
