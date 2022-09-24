import { createContext, PropsWithChildren, useMemo, useReducer } from 'react';
import { ActionType, cartReducer, CartState, CoffeeWithQuantity } from '../reducers';

interface CartContextData {
  cartState: CartState;
  addCoffeeToCart: (coffee: CoffeeWithQuantity) => void;
}

const cartContextInitialValues: CartContextData = {
  cartState: {
    coffeeList: [],
    totalPrice: 0,
    totalItems: 0,
  },
  addCoffeeToCart: () => null,
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

  const cartContextValue = useMemo<CartContextData>(
    () => ({ cartState, addCoffeeToCart }),
    [cartState],
  );

  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
}
