import { CardAddToCartButton, CardFooterContainer, CardPrice } from './styles';
import { ShoppingCartSimple } from 'phosphor-react';
import { QuantityInput } from '../../../../components';
import { useCallback, useContext, useState } from 'react';
import { CartContext } from '../../../../contexts';
import { Coffee } from '../../../../reducers';

interface CardFooterProps {
  coffee: Coffee;
}

export function CardFooter({ coffee }: CardFooterProps) {
  const { addCoffeeToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState<number>(1);

  const updateQuantity = useCallback(
    (newQuantity: number) => {
      const newState = quantity + newQuantity;
      if (newState > 0) {
        setQuantity(newState);
      }
    },
    [quantity],
  );

  const handleAddCoffeeToCart = useCallback(() => {
    addCoffeeToCart({ ...coffee, quantity });
  }, [addCoffeeToCart, quantity, coffee]);

  return (
    <CardFooterContainer>
      <CardPrice>
        R$<h2>{coffee.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h2>
      </CardPrice>
      <div>
        <QuantityInput quantity={quantity} updateQuantity={updateQuantity} />
        <CardAddToCartButton onClick={handleAddCoffeeToCart} type="button">
          <ShoppingCartSimple size={22} weight="fill" />
        </CardAddToCartButton>
      </div>
    </CardFooterContainer>
  );
}
