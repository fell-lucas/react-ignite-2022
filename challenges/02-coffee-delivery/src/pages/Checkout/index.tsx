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
  CheckoutNoItemsButton,
  LeftContainer,
  RightContainer,
  SectionTitle,
} from './styles';

export function Checkout() {
  const { cartState } = useContext(CartContext);

  return (
    <CheckoutContainer>
      {cartState.totalItems > 0 ? (
        <>
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

              <NavLink to="/success">
                <CheckoutConfirmButton disabled={cartState.totalItems <= 0} type="button">
                  Confirmar pedido
                </CheckoutConfirmButton>
              </NavLink>
            </RightContainer>
          </div>
        </>
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
