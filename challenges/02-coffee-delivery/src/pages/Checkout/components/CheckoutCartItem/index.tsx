import { SelectedItemActions } from './actions';
import { SelectedItem, Separator, SelectedItemActionsContainer } from './styles';

export function CheckoutCartItem() {
  return (
    <>
      <SelectedItem>
        <img alt="Expresso" src="./coffee-images/expresso.png" />
        <SelectedItemActionsContainer>
          <h3>Expresso Tradicional</h3>
          <SelectedItemActions />
        </SelectedItemActionsContainer>
        <p>R$ 9,90</p>
      </SelectedItem>
      <Separator />
    </>
  );
}
