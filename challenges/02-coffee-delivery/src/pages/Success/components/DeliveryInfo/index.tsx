import { MapPin, Timer, CurrencyDollar } from 'phosphor-react';
import { useContext } from 'react';
import { CartContext } from '../../../../contexts';
import { defaultTheme } from '../../../../styles/themes';
import { DeliveryInfoContainer, DeliveryInfoItem, IconCircle } from './styles';

export function DeliveryInfo() {
  const { cartState } = useContext(CartContext);

  return (
    <DeliveryInfoContainer>
      <DeliveryInfoItem>
        <IconCircle bg={defaultTheme.colors.brandPurple}>
          <MapPin size={16} weight="fill" />
        </IconCircle>
        <p>
          Entrega em <b>Alguma Rua, 123</b>
          <br />
          Algum Bairro - Alguma Cidade, 🌍
        </p>
      </DeliveryInfoItem>
      <DeliveryInfoItem>
        <IconCircle bg={defaultTheme.colors.brandYellow}>
          <Timer size={16} weight="fill" />
        </IconCircle>
        <p>
          Previsão de entrega <br /> <b>20 min - 30 min</b>
        </p>
      </DeliveryInfoItem>
      <DeliveryInfoItem>
        <IconCircle bg={defaultTheme.colors.brandYellowDark}>
          <CurrencyDollar size={16} />
        </IconCircle>
        <p>
          Pagamento na entrega <br /> <b>{cartState.paymentMethod}</b>
        </p>
      </DeliveryInfoItem>
    </DeliveryInfoContainer>
  );
}
