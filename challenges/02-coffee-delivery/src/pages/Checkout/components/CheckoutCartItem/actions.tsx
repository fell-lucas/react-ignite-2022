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
  const { updateCoffeeQuantity, removeCoffeeFromCart } = useContext(CartContext);

  const handleUpdateQuantity = useCallback(
    (newQuantity: number) => {
      updateCoffeeQuantity({ ...coffee, quantity: newQuantity });
    },
    [coffee, updateCoffeeQuantity],
  );

  const handleRemoveCoffee = useCallback(() => {
    removeCoffeeFromCart({ ...coffee, quantity: 0 });
  }, [coffee, removeCoffeeFromCart]);

  return (
    <div>
      <QuantityInput quantity={coffee.quantity} updateQuantity={handleUpdateQuantity} />
      <RemoveButton onClick={handleRemoveCoffee}>
        <Trash size={16} />
        <p>Remover</p>
      </RemoveButton>
    </div>
  );
}
