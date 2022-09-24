import { CoffeeWithQuantity } from '../../../../reducers';
import { SelectedItemActions } from './actions';
import { SelectedItem, Separator, SelectedItemActionsContainer } from './styles';

interface CheckoutCartItemProps {
  coffee: CoffeeWithQuantity;
}

export function CheckoutCartItem({ coffee }: CheckoutCartItemProps) {
  return (
    <>
      <SelectedItem>
        <img alt={coffee.name} src={`./coffee-images/${coffee.image}`} />
        <SelectedItemActionsContainer>
          <h3>{coffee.name}</h3>
          <SelectedItemActions coffee={coffee} />
        </SelectedItemActionsContainer>
        <p>R$ 9,90</p>
      </SelectedItem>
      <Separator />
    </>
  );
}
