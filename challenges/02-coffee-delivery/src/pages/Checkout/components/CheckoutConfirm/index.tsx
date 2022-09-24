import { useCallback, useContext } from 'react';
import { CartContext } from '../../../../contexts';
import { ValueDisplayContainer, ValueDisplay } from './styles';

export function CheckoutConfirm() {
  const { cartState } = useContext(CartContext);
  const deliveryFee = 3.5;

  const displayCurrency = useCallback((price: number) => {
    return price.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      currency: 'BRL',
      currencyDisplay: 'symbol',
      style: 'currency',
    });
  }, []);

  return (
    <div>
      <ValueDisplayContainer>
        <ValueDisplay>
          <p>Total de itens</p>
          <h4>{displayCurrency(cartState.totalPrice)}</h4>
        </ValueDisplay>
        <ValueDisplay>
          <p>Entrega</p>
          <h4>{displayCurrency(deliveryFee)}</h4>
        </ValueDisplay>
        <ValueDisplay>
          <h3>Total</h3>
          <h3>{displayCurrency(cartState.totalPrice + deliveryFee)}</h3>
        </ValueDisplay>
      </ValueDisplayContainer>
    </div>
  );
}
