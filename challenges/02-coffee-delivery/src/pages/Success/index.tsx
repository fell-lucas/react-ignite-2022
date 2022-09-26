import { DeliveryInfo } from './components';
import { SuccessMainContainer, SuccessSubtitle, SuccessTitle } from './styles';
import SuccessDriver from '../../assets/success-driver.svg';
import { useContext, useEffect } from 'react';
import { CartContext } from '../../contexts';
import { useNavigate } from 'react-router-dom';

export function Success() {
  const { cartState } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cartState.paymentMethod) {
      navigate('/', { replace: true });
    }
  }, [cartState, navigate]);

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
