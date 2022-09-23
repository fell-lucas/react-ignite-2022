import {
  CheckoutAddress,
  CheckoutCartItem,
  CheckoutConfirm,
  CheckoutPaymentMethods,
} from './components';
import { CheckoutContainer, LeftContainer, RightContainer, SectionTitle } from './styles';

export function Checkout() {
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
          <CheckoutCartItem />
          <CheckoutCartItem />
          <CheckoutConfirm />
        </RightContainer>
      </div>
    </CheckoutContainer>
  );
}
