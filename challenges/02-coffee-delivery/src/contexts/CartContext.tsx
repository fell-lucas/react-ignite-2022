import { createContext, PropsWithChildren, useMemo, useReducer } from 'react';
import { cartReducer, CartState } from '../reducers';

interface CartContextData {
  cartState: CartState;
}

const cartContextInitialValues: CartContextData = {
  cartState: {
    coffeeList: [],
    totalPrice: 0,
  },
};

export const CartContext = createContext<CartContextData>(cartContextInitialValues);

export function CartProvider({ children }: PropsWithChildren) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    cartContextInitialValues.cartState,
  );

  const cartContextValue = useMemo<CartContextData>(() => ({ cartState }), [cartState]);

  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
}
