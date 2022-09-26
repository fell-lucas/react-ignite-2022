import { createContext, PropsWithChildren, useEffect, useMemo, useReducer } from 'react';
import { ActionType, cartReducer, CartState, CoffeeWithQuantity } from '../reducers';

interface CartContextData {
  cartState: CartState;
  addCoffeeToCart: (coffee: CoffeeWithQuantity) => void;
  updateCoffeeQuantity: (coffee: CoffeeWithQuantity) => void;
  removeCoffeeFromCart: (coffee: CoffeeWithQuantity) => void;
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
};

export const CartContext = createContext<CartContextData>(cartContextInitialValues);

const LS_CART_STATE_KEY = '@coffee-delivery:cart-state:1.0.0';

export function CartProvider({ children }: PropsWithChildren) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    cartContextInitialValues.cartState,
    readStateFromStorage,
  );

  function readStateFromStorage(): CartState {
    const lsString = localStorage.getItem(LS_CART_STATE_KEY);

    if (lsString) {
      return JSON.parse(lsString) as CartState;
    }
    return cartContextInitialValues.cartState;
  }

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

  const cartContextValue = useMemo<CartContextData>(
    () => ({
      cartState,
      addCoffeeToCart,
      updateCoffeeQuantity,
      removeCoffeeFromCart,
    }),
    [cartState],
  );

  useEffect(() => {
    localStorage.setItem(LS_CART_STATE_KEY, JSON.stringify(cartState));
  }, [cartState]);

  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
}
