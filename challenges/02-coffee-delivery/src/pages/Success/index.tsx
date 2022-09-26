import { DeliveryInfo } from './components';
import { SuccessMainContainer, SuccessSubtitle, SuccessTitle } from './styles';
import SuccessDriver from '../../assets/success-driver.svg';
import { useContext, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';
import { CartContext, NewOrderSubmitType } from '../../contexts';

export function Success() {
  const { getValues, reset } = useFormContext<NewOrderSubmitType>();
  const { cartState, removeCoffeeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const deliveryInfo = useMemo(() => getValues(), [getValues]);

  useEffect(() => {
    if (!deliveryInfo.city) {
      navigate('/', { replace: true });
    }
    return () => {
      reset();
      cartState.coffeeList.forEach(removeCoffeeFromCart);
    };
  }, [reset, deliveryInfo, navigate, cartState, removeCoffeeFromCart]);

  return (
    <>
      <div>
        <SuccessTitle>Uhu! Pedido confirmado</SuccessTitle>
        <SuccessSubtitle>
          Agora é só aguardar que logo o café chegará até você
        </SuccessSubtitle>
      </div>
      <SuccessMainContainer>
        <DeliveryInfo {...deliveryInfo} />
        <img alt="Homem dirigindo lambreta levando consigo o café" src={SuccessDriver} />
      </SuccessMainContainer>
    </>
  );
}
