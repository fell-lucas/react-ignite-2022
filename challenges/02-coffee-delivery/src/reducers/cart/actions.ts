import { CoffeeWithQuantity } from './reducer';

export enum ActionType {
  AddCoffeeToCart,
  UpdateCoffeeQuantity,
  RemoveCoffeeFromCart,
  EmptyCart,
}

export interface Action {
  type: ActionType;
  payload?: {
    coffee?: CoffeeWithQuantity;
  };
}
