import { CoffeeWithQuantity } from './reducer';

export enum ActionType {
  AddCoffeeToCart,
  UpdateCoffeeQuantity,
  RemoveCoffeeFromCart,
}

export interface Action {
  type: ActionType;
  payload?: {
    coffee?: CoffeeWithQuantity;
  };
}
