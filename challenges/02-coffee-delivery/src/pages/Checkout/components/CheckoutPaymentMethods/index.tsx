import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react';
import { useContext } from 'react';
import { CartContext } from '../../../../contexts';
import { PaymentMethods } from '../../../../reducers';
import { defaultTheme } from '../../../../styles/themes';
import { LeftTitleContainer } from '../../styles';
import { PaymentMethodButton, PaymentMethodsContainer } from './styles';

export function CheckoutPaymentMethods() {
  const { cartState, updatePaymentMethod } = useContext(CartContext);

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
        <PaymentMethodButton
          onClick={() => updatePaymentMethod(PaymentMethods.Credit)}
          selected={cartState.paymentMethod === PaymentMethods.Credit}
          type="button"
        >
          <CreditCard size={16} />
          <p>Cartão de crédito</p>
        </PaymentMethodButton>
        <PaymentMethodButton
          onClick={() => updatePaymentMethod(PaymentMethods.Debit)}
          selected={cartState.paymentMethod === PaymentMethods.Debit}
          type="button"
        >
          <Bank size={16} />
          <p>Cartão de débito</p>
        </PaymentMethodButton>
        <PaymentMethodButton
          onClick={() => updatePaymentMethod(PaymentMethods.Cash)}
          selected={cartState.paymentMethod === PaymentMethods.Cash}
          type="button"
        >
          <Money size={16} />
          <p>Dinheiro</p>
        </PaymentMethodButton>
      </PaymentMethodsContainer>
    </>
  );
}
