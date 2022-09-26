import { Minus, Plus } from 'phosphor-react';
import { useCallback } from 'react';
import { CardQtyContainer, CardQtyButton } from './styles';

interface QuantityInputProps {
  quantity: number;
  updateQuantity: (newQuantity: number) => void;
}

export function QuantityInput({ quantity, updateQuantity }: QuantityInputProps) {
  const handleIncreaseQuantity = useCallback(() => updateQuantity(1), [updateQuantity]);
  const handleDecreaseQuantity = useCallback(() => updateQuantity(-1), [updateQuantity]);

  return (
    <CardQtyContainer>
      <CardQtyButton onClick={handleDecreaseQuantity} type="button">
        <Minus size={14} weight="bold" />
      </CardQtyButton>
      <p>{quantity}</p>
      <CardQtyButton onClick={handleIncreaseQuantity} type="button">
        <Plus size={14} weight="bold" />
      </CardQtyButton>
    </CardQtyContainer>
  );
}
