import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react';
import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { NewOrderSubmitType, PaymentMethods } from '../../../../contexts';
import { defaultTheme } from '../../../../styles/themes';
import { LeftTitleContainer } from '../../styles';
import { PaymentMethodButton, PaymentMethodsContainer } from './styles';

export function CheckoutPaymentMethods() {
  const { setValue, getValues } = useFormContext<NewOrderSubmitType>();
  const { t } = useTranslation('checkout');
  const { t: l } = useTranslation('layout');

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
          <h4>{t('personal-info.payment.title')}</h4>
          <p>{t('personal-info.payment.subtitle')}</p>
        </div>
      </LeftTitleContainer>
      <PaymentMethodsContainer>
        <PaymentMethodButton
          onClick={() => handleUpdatePaymentMethod(PaymentMethods.Credit)}
          selected={getValues('paymentMethod') === PaymentMethods.Credit}
          type="button"
        >
          <CreditCard size={16} />
          <p>{l('payment-methods.credit-card')}</p>
        </PaymentMethodButton>
        <PaymentMethodButton
          onClick={() => handleUpdatePaymentMethod(PaymentMethods.Debit)}
          selected={getValues('paymentMethod') === PaymentMethods.Debit}
          type="button"
        >
          <Bank size={16} />
          <p>{l('payment-methods.debit-card')}</p>
        </PaymentMethodButton>
        <PaymentMethodButton
          onClick={() => handleUpdatePaymentMethod(PaymentMethods.Cash)}
          selected={getValues('paymentMethod') === PaymentMethods.Cash}
          type="button"
        >
          <Money size={16} />
          <p>{l('payment-methods.cash')}</p>
        </PaymentMethodButton>
      </PaymentMethodsContainer>
    </>
  );
}
