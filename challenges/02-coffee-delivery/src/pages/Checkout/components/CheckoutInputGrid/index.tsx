import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { CheckoutInput } from '../CheckoutInput';
import { CheckoutGrid } from './style';

export function CheckoutInputGrid() {
  const { register } = useFormContext();
  const { t } = useTranslation('checkout');

  return (
    <CheckoutGrid>
      <CheckoutInput
        gridColumn="1 / span 3"
        placeholder={t('personal-info.address.form.zip-code')}
        register={register('zipCode')}
      />
      <CheckoutInput
        gridColumn="1 / span 9"
        placeholder={t('personal-info.address.form.road')}
        register={register('road')}
      />
      <CheckoutInput
        gridColumn="1 / span 3"
        placeholder={t('personal-info.address.form.house-number')}
        register={register('houseNumber')}
      />
      <CheckoutInput
        gridColumn="4 / span 6"
        optional
        placeholder={t('personal-info.address.form.complement')}
        register={register('complement')}
      />
      <CheckoutInput
        gridColumn="1 / span 3"
        placeholder={t('personal-info.address.form.neighborhood')}
        register={register('neighborhood')}
      />
      <CheckoutInput
        gridColumn="4 / span 5"
        placeholder={t('personal-info.address.form.city')}
        register={register('city')}
      />
      <CheckoutInput
        gridColumn="9 / span 1"
        placeholder={t('personal-info.address.form.region-code')}
        register={register('regionCode')}
      />
    </CheckoutGrid>
  );
}
