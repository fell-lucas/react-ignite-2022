import produce from 'immer';
import { WritableDraft } from 'immer/dist/internal';
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
  const updateTotals = (draft: WritableDraft<CartState>): void => {
    draft.totalPrice = draft.coffeeList.reduce((acc, cur) => {
      acc += cur.price * cur.quantity;
      return acc;
    }, 0);

    draft.totalItems = draft.coffeeList.reduce((acc, cur) => {
      acc += cur.quantity;
      return acc;
    }, 0);
  };

  const getCoffeeIndex = (coffeId: string) =>
    state.coffeeList.findIndex((coffee) => coffee.id === coffeId);

  switch (action.type) {
    case ActionType.AddCoffeeToCart:
      return produce(state, (draft) => {
        if (action.payload && action.payload.coffee.quantity > 0) {
          const existingCoffeeIndex = getCoffeeIndex(action.payload.coffee.id);

          if (existingCoffeeIndex !== -1) {
            draft.coffeeList[existingCoffeeIndex].quantity +=
              action.payload.coffee.quantity;
          } else {
            draft.coffeeList.push(action.payload.coffee);
          }

          updateTotals(draft);
        }
      });
    case ActionType.UpdateCoffeeQuantity:
      return produce(state, (draft) => {
        if (action.payload) {
          const existingCoffeeIndex = getCoffeeIndex(action.payload.coffee.id);

          draft.coffeeList[existingCoffeeIndex].quantity +=
            action.payload.coffee.quantity;

          if (draft.coffeeList[existingCoffeeIndex].quantity <= 0) {
            draft.coffeeList.splice(existingCoffeeIndex, 1);
          }

          updateTotals(draft);
        }
      });
    case ActionType.RemoveCoffeeFromCart:
      return produce(state, (draft) => {
        if (action.payload) {
          const existingCoffeeIndex = getCoffeeIndex(action.payload.coffee.id);

          draft.coffeeList.splice(existingCoffeeIndex, 1);
          updateTotals(draft);
        }
      });

    default:
      return state;
  }
}
