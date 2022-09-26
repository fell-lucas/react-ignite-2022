import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts';
import { NewOrderSubmitType } from '../../forms/checkout';
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

export function Checkout() {
  const { cartState } = useContext(CartContext);
  const navigate = useNavigate();
  const newOrderForm = useFormContext<NewOrderSubmitType>();

  const { formState, handleSubmit } = newOrderForm;

  function handleNewOrderSubmit() {
    navigate('/success', { replace: true });
  }

  return (
    <CheckoutContainer>
      {cartState.totalItems > 0 ? (
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        <form onSubmit={handleSubmit(handleNewOrderSubmit)}>
          <div>
            <SectionTitle>Complete seu pedido</SectionTitle>

            <LeftContainer>
              <CheckoutAddress />
            </LeftContainer>
            <LeftContainer>
              <CheckoutPaymentMethods />
            </LeftContainer>
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
