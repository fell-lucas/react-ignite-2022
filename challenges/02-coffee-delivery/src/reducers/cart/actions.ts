import { CoffeeWithQuantity, PaymentMethods } from './reducer';

export enum ActionType {
  AddCoffeeToCart,
  UpdateCoffeeQuantity,
  RemoveCoffeeFromCart,
  UpdatePaymentMethod,
}

export interface Action {
  type: ActionType;
  payload?: {
    coffee?: CoffeeWithQuantity;
    paymentMethod?: PaymentMethods;
  };
}
