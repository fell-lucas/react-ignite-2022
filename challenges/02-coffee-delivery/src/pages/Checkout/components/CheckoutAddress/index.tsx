import { MapPinLine } from 'phosphor-react';
import { defaultTheme } from '../../../../styles/themes';
import { LeftTitleContainer } from '../../styles';
import { CheckoutInputGrid } from '../CheckoutInputGrid';

export function CheckoutAddress() {
  return (
    <>
      <LeftTitleContainer>
        <MapPinLine color={defaultTheme.colors.brandYellowDark} size={22} />
        <div>
          <h4>Endereço de Entrega</h4>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </LeftTitleContainer>
      <CheckoutInputGrid />
    </>
  );
}
