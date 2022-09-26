import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react';
import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { NewOrderSubmitType, PaymentMethods } from '../../../../contexts';
import { defaultTheme } from '../../../../styles/themes';
import { LeftTitleContainer } from '../../styles';
import { PaymentMethodButton, PaymentMethodsContainer } from './styles';

export function CheckoutPaymentMethods() {
  const { setValue, getValues } = useFormContext<NewOrderSubmitType>();

  const handleUpdatePaymentMethod = useCallback(
    (paymentMethod: PaymentMethods) => {
      setValue('paymentMethod', paymentMethod, {
        shouldTouch: true,
        shouldValidate: true,
        shouldDirty: true,
      });
    },
    [setValue],
  );

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
          onClick={() => handleUpdatePaymentMethod(PaymentMethods.Credit)}
          selected={getValues('paymentMethod') === PaymentMethods.Credit}
          type="button"
        >
          <CreditCard size={16} />
          <p>Cartão de crédito</p>
        </PaymentMethodButton>
        <PaymentMethodButton
          onClick={() => handleUpdatePaymentMethod(PaymentMethods.Debit)}
          selected={getValues('paymentMethod') === PaymentMethods.Debit}
          type="button"
        >
          <Bank size={16} />
          <p>Cartão de débito</p>
        </PaymentMethodButton>
        <PaymentMethodButton
          onClick={() => handleUpdatePaymentMethod(PaymentMethods.Cash)}
          selected={getValues('paymentMethod') === PaymentMethods.Cash}
          type="button"
        >
          <Money size={16} />
          <p>Dinheiro</p>
        </PaymentMethodButton>
      </PaymentMethodsContainer>
    </>
  );
}
