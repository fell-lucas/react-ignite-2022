import {
  CardAddToCartButton,
  CardFooterContainer,
  CardPrice,
  CardQtyButton,
  CardQtyContainer,
} from './styles';
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react';

interface CatalogCardFooterProps {
  price: number;
}

export function CardFooter({ price }: CatalogCardFooterProps) {
  return (
    <CardFooterContainer>
      <CardPrice>
        R$<h2>{price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h2>
      </CardPrice>
      <div>
        <CardQtyContainer>
          <CardQtyButton>
            <Minus size={14} weight="bold" />
          </CardQtyButton>
          <p>1</p>
          <CardQtyButton>
            <Plus size={14} weight="bold" />
          </CardQtyButton>
        </CardQtyContainer>
        <CardAddToCartButton type="button">
          <ShoppingCartSimple size={22} weight="fill" />
        </CardAddToCartButton>
      </div>
    </CardFooterContainer>
  );
}
