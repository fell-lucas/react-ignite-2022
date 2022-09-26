import { MapPin, Timer, CurrencyDollar } from 'phosphor-react';
import { PaymentMethods } from '../../../../contexts';
import { defaultTheme } from '../../../../styles/themes';
import { DeliveryInfoContainer, DeliveryInfoItem, IconCircle } from './styles';

interface DeliveryInfoProps {
  road: string;
  paymentMethod: PaymentMethods;
  city: string;
  neighborhood: string;
}

export function DeliveryInfo({
  city,
  neighborhood,
  paymentMethod,
  road,
}: DeliveryInfoProps) {
  return (
    <DeliveryInfoContainer>
      <DeliveryInfoItem>
        <IconCircle bg={defaultTheme.colors.brandPurple}>
          <MapPin size={16} weight="fill" />
        </IconCircle>
        <p>
          Entrega em <b>{road}</b>
          <br />
          {neighborhood} - {city}, 🌍
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
          Pagamento na entrega <br /> <b>{paymentMethod}</b>
        </p>
      </DeliveryInfoItem>
    </DeliveryInfoContainer>
  );
}
