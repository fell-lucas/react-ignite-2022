import { createContext, PropsWithChildren, useMemo, useReducer } from 'react';
import {
  ActionType,
  cartReducer,
  CartState,
  CoffeeWithQuantity,
  PaymentMethods,
} from '../reducers';

interface CartContextData {
  cartState: CartState;
  addCoffeeToCart: (coffee: CoffeeWithQuantity) => void;
  updateCoffeeQuantity: (coffee: CoffeeWithQuantity) => void;
  removeCoffeeFromCart: (coffee: CoffeeWithQuantity) => void;
  updatePaymentMethod: (paymentMethod: PaymentMethods) => void;
}

const cartContextInitialValues: CartContextData = {
  cartState: {
    coffeeList: [],
    totalPrice: 0,
    totalItems: 0,
  },
  addCoffeeToCart: () => null,
  updateCoffeeQuantity: () => null,
  removeCoffeeFromCart: () => null,
  updatePaymentMethod: () => null,
};

export const CartContext = createContext<CartContextData>(cartContextInitialValues);

export function CartProvider({ children }: PropsWithChildren) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    cartContextInitialValues.cartState,
  );

  function addCoffeeToCart(coffee: CoffeeWithQuantity) {
    dispatch({
      type: ActionType.AddCoffeeToCart,
      payload: {
        coffee,
      },
    });
  }

  function updateCoffeeQuantity(coffee: CoffeeWithQuantity) {
    dispatch({
      type: ActionType.UpdateCoffeeQuantity,
      payload: {
        coffee,
      },
    });
  }

  function removeCoffeeFromCart(coffee: CoffeeWithQuantity) {
    dispatch({
      type: ActionType.RemoveCoffeeFromCart,
      payload: {
        coffee,
      },
    });
  }

  function updatePaymentMethod(paymentMethod: PaymentMethods) {
    dispatch({
      type: ActionType.UpdatePaymentMethod,
      payload: {
        paymentMethod,
      },
    });
  }

  const cartContextValue = useMemo<CartContextData>(
    () => ({
      cartState,
      addCoffeeToCart,
      updateCoffeeQuantity,
      removeCoffeeFromCart,
      updatePaymentMethod,
    }),
    [cartState],
  );

  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
}
