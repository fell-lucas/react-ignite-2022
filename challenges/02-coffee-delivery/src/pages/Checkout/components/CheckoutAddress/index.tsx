import { MapPinLine } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { defaultTheme } from '../../../../styles/themes';
import { LeftTitleContainer } from '../../styles';
import { CheckoutInputGrid } from '../CheckoutInputGrid';

export function CheckoutAddress() {
  const { t } = useTranslation('checkout');

  return (
    <>
      <LeftTitleContainer>
        <MapPinLine color={defaultTheme.colors.brandYellowDark} size={22} />
        <div>
          <h4>{t('personal-info.address.title')}</h4>
          <p>{t('personal-info.address.subtitle')}</p>
        </div>
      </LeftTitleContainer>
      <CheckoutInputGrid />
    </>
  );
}
