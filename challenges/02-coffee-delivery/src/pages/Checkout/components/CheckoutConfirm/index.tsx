import { useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { CartContext } from '../../../../contexts';
import { ValueDisplayContainer, ValueDisplay } from './styles';

export function CheckoutConfirm() {
  const { cartState } = useContext(CartContext);
  const { t, i18n } = useTranslation('checkout');
  const deliveryFee = 3.5;

  const displayCurrency = useCallback(
    (price: number) => {
      return price.toLocaleString(i18n.resolvedLanguage, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        currency: i18n.resolvedLanguage === 'pt-BR' ? 'BRL' : 'USD',
        currencyDisplay: 'symbol',
        style: 'currency',
      });
    },
    [i18n.resolvedLanguage],
  );

  return (
    <div>
      <ValueDisplayContainer>
        <ValueDisplay>
          <p>{t('cart.footer.total-items')}</p>
          <h4>{displayCurrency(cartState.totalPrice)}</h4>
        </ValueDisplay>
        <ValueDisplay>
          <p>{t('cart.footer.delivery')}</p>
          <h4>{displayCurrency(deliveryFee)}</h4>
        </ValueDisplay>
        <ValueDisplay>
          <h3>{t('cart.footer.total')}</h3>
          <h3>{displayCurrency(cartState.totalPrice + deliveryFee)}</h3>
        </ValueDisplay>
      </ValueDisplayContainer>
    </div>
  );
}
