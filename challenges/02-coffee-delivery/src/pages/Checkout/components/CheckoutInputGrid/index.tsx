import { CheckoutInput } from '../CheckoutInput';
import { CheckoutGrid } from './style';

export function CheckoutInputGrid() {
  return (
    <CheckoutGrid>
      <CheckoutInput gridColumn="1 / span 3" placeholder="CEP" />
      <CheckoutInput gridColumn="1 / span 9" placeholder="Rua" />
      <CheckoutInput gridColumn="1 / span 3" placeholder="Número" />
      <CheckoutInput gridColumn="4 / span 6" optional placeholder="Complemento" />
      <CheckoutInput gridColumn="1 / span 3" placeholder="Bairro" />
      <CheckoutInput gridColumn="4 / span 5" placeholder="Cidade" />
      <CheckoutInput gridColumn="9 / span 1" placeholder="UF" />
    </CheckoutGrid>
  );
}
