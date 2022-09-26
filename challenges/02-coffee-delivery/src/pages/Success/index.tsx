import { DeliveryInfo } from './components';
import { SuccessMainContainer, SuccessSubtitle, SuccessTitle } from './styles';
import SuccessDriver from '../../assets/success-driver.svg';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';
import { NewOrderSubmitType } from '../../forms/checkout';

export function Success() {
  const { formState, getValues } = useFormContext<NewOrderSubmitType>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!formState.isDirty || !formState.isValid) {
      navigate('/', { replace: true });
    }
  }, [formState, navigate]);

  const deliveryInfo = getValues();

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
        <img
          alt="Ilustração de homem dirigindo lambreta levando consigo o café"
          src={SuccessDriver}
        />
      </SuccessMainContainer>
    </>
  );
}
