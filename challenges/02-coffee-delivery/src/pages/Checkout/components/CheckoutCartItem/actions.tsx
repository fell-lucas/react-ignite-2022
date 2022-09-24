import { Trash } from 'phosphor-react';
import { useCallback, useContext } from 'react';
import { QuantityInput } from '../../../../components';
import { CartContext } from '../../../../contexts';
import { CoffeeWithQuantity } from '../../../../reducers';
import { RemoveButton } from './styles';

interface SelectedItemActionsProps {
  coffee: CoffeeWithQuantity;
}

export function SelectedItemActions({ coffee }: SelectedItemActionsProps) {
  const { addCoffeeToCart } = useContext(CartContext);

  const updateQuantity = useCallback(
    (newQuantity: number) => {
      addCoffeeToCart({ ...coffee, quantity: newQuantity });
    },
    [addCoffeeToCart, coffee],
  );
  console.log(coffee.quantity);

  return (
    <div>
      <QuantityInput quantity={coffee.quantity} updateQuantity={updateQuantity} />
      <RemoveButton>
        <Trash size={16} />
        <p>Remover</p>
      </RemoveButton>
    </div>
  );
}
