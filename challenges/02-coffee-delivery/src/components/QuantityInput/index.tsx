import { Minus, Plus } from 'phosphor-react';
import { CardQtyContainer, CardQtyButton } from './styles';

export function QuantityInput() {
  return (
    <CardQtyContainer>
      <CardQtyButton>
        <Minus size={14} weight="bold" />
      </CardQtyButton>
      <p>1</p>
      <CardQtyButton>
        <Plus size={14} weight="bold" />
      </CardQtyButton>
    </CardQtyContainer>
  );
}
