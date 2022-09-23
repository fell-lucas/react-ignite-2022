import { DeliveryInfo } from './components';
import { SuccessMainContainer, SuccessSubtitle, SuccessTitle } from './styles';
import SuccessDriver from '../../assets/success-driver.svg';

export function Success() {
  return (
    <>
      <div>
        <SuccessTitle>Uhu! Pedido confirmado</SuccessTitle>
        <SuccessSubtitle>
          Agora é só aguardar que logo o café chegará até você
        </SuccessSubtitle>
      </div>
      <SuccessMainContainer>
        <DeliveryInfo />
        <img
          alt="Ilustração de homem dirigindo lambreta levando consigo o café"
          src={SuccessDriver}
        />
      </SuccessMainContainer>
    </>
  );
}
