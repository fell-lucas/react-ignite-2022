import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react';
import { defaultTheme } from '../../../../styles/themes';
import { LeftTitleContainer } from '../../styles';
import { PaymentMethodButton, PaymentMethodsContainer } from './styles';

export function CheckoutPaymentMethods() {
  return (
    <>
      <LeftTitleContainer>
        <CurrencyDollar color={defaultTheme.colors.brandPurple} size={22} />
        <div>
          <h4>Pagamento</h4>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </div>
      </LeftTitleContainer>
      <PaymentMethodsContainer>
        <PaymentMethodButton type="button">
          <CreditCard size={16} />
          <p>Cartão de crédito</p>
        </PaymentMethodButton>
        <PaymentMethodButton type="button">
          <Bank size={16} />
          <p>Cartão de débito</p>
        </PaymentMethodButton>
        <PaymentMethodButton type="button">
          <Money size={16} />
          <p>Dinheiro</p>
        </PaymentMethodButton>
      </PaymentMethodsContainer>
    </>
  );
}
