import { useTranslation } from 'react-i18next';
import { CoffeeWithQuantity } from '../../../../reducers';
import { SelectedItemActions } from './actions';
import { SelectedItem, Separator, SelectedItemActionsContainer } from './styles';

interface CheckoutCartItemProps {
  coffee: CoffeeWithQuantity;
}

export function CheckoutCartItem({ coffee }: CheckoutCartItemProps) {
  const { t, i18n } = useTranslation('layout');

  return (
    <>
      <SelectedItem>
        <img alt={coffee.name} src={`./coffee-images/${coffee.image}`} />
        <SelectedItemActionsContainer>
          <h3>{coffee.name}</h3>
          <SelectedItemActions coffee={coffee} />
        </SelectedItemActionsContainer>
        <p>
          {t('currency')}
          {coffee.price.toLocaleString(i18n.resolvedLanguage, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </SelectedItem>
      <Separator />
    </>
  );
}
