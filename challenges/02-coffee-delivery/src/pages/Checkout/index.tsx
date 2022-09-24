import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
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
  CheckoutNoItems,
  LeftContainer,
  RightContainer,
  SectionTitle,
} from './styles';

export function Checkout() {
  const { cartState } = useContext(CartContext);

  return (
    <CheckoutContainer>
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
          {cartState.totalItems > 0 ? (
            <>
              {cartState.coffeeList.map((coffee) => (
                <CheckoutCartItem coffee={coffee} key={coffee.id} />
              ))}
              <CheckoutConfirm />
            </>
          ) : (
            <CheckoutNoItems>Nenhum item no carrinho 😥</CheckoutNoItems>
          )}

          <NavLink to="/success">
            <CheckoutConfirmButton disabled={cartState.totalItems <= 0} type="button">
              Confirmar pedido
            </CheckoutConfirmButton>
          </NavLink>
        </RightContainer>
      </div>
    </CheckoutContainer>
  );
}
