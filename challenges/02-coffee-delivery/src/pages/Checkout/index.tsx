import { useContext } from 'react';
import { CartContext } from '../../contexts';
import {
  CheckoutAddress,
  CheckoutCartItem,
  CheckoutConfirm,
  CheckoutPaymentMethods,
} from './components';
import { CheckoutContainer, LeftContainer, RightContainer, SectionTitle } from './styles';

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
        {cartState.totalItems > 0 && (
          <RightContainer>
            {cartState.coffeeList.map((coffee) => (
              <CheckoutCartItem coffee={coffee} key={coffee.id} />
            ))}
            <CheckoutConfirm />
          </RightContainer>
        )}
      </div>
    </CheckoutContainer>
  );
}
