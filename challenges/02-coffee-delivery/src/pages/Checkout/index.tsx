import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { CartContext, NewOrderSubmitType } from '../../contexts';
import {
  CheckoutAddress,
  CheckoutCartItem,
  CheckoutConfirm,
  CheckoutPaymentMethods,
} from './components';
import {
  CheckoutConfirmButton,
  CheckoutContainer,
  CheckoutNoItemsButton,
  CheckoutNoItemsContainer,
  LeftContainer,
  RightContainer,
} from './styles';
import { SectionTitle } from '../../styles/shared';
import { useTranslation } from 'react-i18next';

export function Checkout() {
  const { cartState } = useContext(CartContext);
  const navigate = useNavigate();
  const newOrderForm = useFormContext<NewOrderSubmitType>();
  const { t } = useTranslation('checkout');

  const { formState, handleSubmit } = newOrderForm;

  function handleNewOrderSubmit() {
    navigate('/success', { replace: true });
  }

  return (
    <CheckoutContainer>
      {cartState.totalItems > 0 ? (
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        <form onSubmit={handleSubmit(handleNewOrderSubmit)}>
          <div>
            <SectionTitle>{t('personal-info.title')}</SectionTitle>
            <LeftContainer>
              <CheckoutAddress />
            </LeftContainer>
            <LeftContainer>
              <CheckoutPaymentMethods />
            </LeftContainer>
          </div>
          <div>
            <SectionTitle>{t('cart.title')}</SectionTitle>
            <RightContainer>
              <>
                {cartState.coffeeList.map((coffee) => (
                  <CheckoutCartItem coffee={coffee} key={coffee.id} />
                ))}
                <CheckoutConfirm />
              </>

              <CheckoutConfirmButton
                disabled={!formState.isDirty || !formState.isValid}
                type="submit"
              >
                {t('cart.confirm-order')}
              </CheckoutConfirmButton>
            </RightContainer>
          </div>
        </form>
      ) : (
        <CheckoutNoItemsContainer>
          <SectionTitle>{t('empty-cart.title')}</SectionTitle>
          <NavLink to="/">
            <CheckoutNoItemsButton>{t('empty-cart.button')}</CheckoutNoItemsButton>
          </NavLink>
        </CheckoutNoItemsContainer>
      )}
    </CheckoutContainer>
  );
}
