import { MapPin, Timer, CurrencyDollar } from 'phosphor-react';
import { defaultTheme } from '../../../../styles/themes';
import { DeliveryInfoContainer, DeliveryInfoItem, IconCircle } from './styles';

export function DeliveryInfo() {
  return (
    <DeliveryInfoContainer>
      <DeliveryInfoItem>
        <IconCircle bg={defaultTheme.colors.brandPurple}>
          <MapPin size={16} weight="fill" />
        </IconCircle>
        <p>
          Entrega em <b>Rua João Daniel Martinelli, 102</b>
          <br />
          Farrapos - Porto Alegre, RS
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
          Pagamento na entrega <br /> <b>Cartão de crédito</b>
        </p>
      </DeliveryInfoItem>
    </DeliveryInfoContainer>
  );
}
