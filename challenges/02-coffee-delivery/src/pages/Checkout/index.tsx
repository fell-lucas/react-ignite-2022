import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react';
import { QuantityInput } from '../../components';
import { defaultTheme } from '../../styles/themes';
import { CheckoutInputGrid } from './components';
import {
  CheckoutContainer,
  LeftContainer,
  LeftPaymentMethodsContainer,
  LeftTitleContainer,
  RemoveButton,
  RightContainer,
  SectionTitle,
  SelectedItem,
} from './styles';

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <SectionTitle>Complete seu pedido</SectionTitle>
        <LeftContainer>
          <LeftTitleContainer>
            <MapPinLine color={defaultTheme.colors.brandYellowDark} size={22} />
            <div>
              <h4>Endereço de Entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </LeftTitleContainer>
          <CheckoutInputGrid />
        </LeftContainer>
        <LeftContainer>
          <LeftTitleContainer>
            <CurrencyDollar color={defaultTheme.colors.brandPurple} size={22} />
            <div>
              <h4>Pagamento</h4>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </LeftTitleContainer>
          <LeftPaymentMethodsContainer>
            <button type="button">
              <CreditCard size={16} />
              <p>Cartão de crédito</p>
            </button>
            <button type="button">
              <Bank size={16} />
              <p>Cartão de débito</p>
            </button>
            <button type="button">
              <Money size={16} />
              <p>Dinheiro</p>
            </button>
          </LeftPaymentMethodsContainer>
        </LeftContainer>
      </div>
      <div>
        <SectionTitle>Cafés selecionados</SectionTitle>
        <RightContainer>
          <SelectedItem>
            <img alt="Expresso" src="./coffee-images/expresso.png" />
            <div>
              <h3>Expresso Tradicional</h3>
              <div>
                <QuantityInput />
                <RemoveButton>
                  <Trash size={16} />
                  <p>Remover</p>
                </RemoveButton>
              </div>
            </div>
            <p>R$ 9,90</p>
          </SelectedItem>
        </RightContainer>
      </div>
    </CheckoutContainer>
  );
}
