import produce from 'immer';
import { Action, ActionType } from './actions';

export interface Coffee {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  categories: string[];
}

export interface CoffeeWithQuantity extends Coffee {
  quantity: number;
}

export interface CartState {
  coffeeList: CoffeeWithQuantity[];
  totalPrice: number;
  totalItems: number;
}

export function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case ActionType.AddCoffeeToCart:
      return produce(state, (draft) => {
        if (action.payload && action.payload.coffee.quantity > 0) {
          const existingCoffeeIndex = state.coffeeList.findIndex(
            (coffee) => coffee.id === action.payload?.coffee.id,
          );

          if (existingCoffeeIndex !== -1) {
            draft.coffeeList[existingCoffeeIndex].quantity +=
              action.payload.coffee.quantity;
          } else {
            draft.coffeeList.push(action.payload.coffee);
          }

          draft.totalPrice = draft.coffeeList.reduce((acc, cur) => {
            acc += cur.price * cur.quantity;
            return acc;
          }, 0);

          draft.totalItems = draft.coffeeList.reduce((acc, cur) => {
            acc += cur.quantity;
            return acc;
          }, 0);
        }
      });

    default:
      return state;
  }
}
