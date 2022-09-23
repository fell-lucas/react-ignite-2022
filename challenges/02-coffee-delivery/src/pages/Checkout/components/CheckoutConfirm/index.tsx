import { ValueDisplayContainer, CheckoutConfirmButton, ValueDisplay } from './styles';

export function CheckoutConfirm() {
  return (
    <div>
      <ValueDisplayContainer>
        <ValueDisplay>
          <p>Total de itens</p>
          <h4>R$ 29,70</h4>
        </ValueDisplay>
        <ValueDisplay>
          <p>Entrega</p>
          <h4>R$ 3,50</h4>
        </ValueDisplay>
        <ValueDisplay>
          <h3>Total</h3>
          <h3>R$ 33,20</h3>
        </ValueDisplay>
      </ValueDisplayContainer>
      <CheckoutConfirmButton type="button">Confirmar pedido</CheckoutConfirmButton>
    </div>
  );
}
