import { CoffeeWithQuantity } from './reducer';

export enum ActionType {
  AddCoffeeToCart,
}

export interface Action {
  type: ActionType;
  payload?: {
    coffee: CoffeeWithQuantity;
  };
}
