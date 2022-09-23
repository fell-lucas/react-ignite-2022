import { CardAddToCartButton, CardFooterContainer, CardPrice } from './styles';
import { ShoppingCartSimple } from 'phosphor-react';
import { QuantityInput } from '../../../../components';

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
        <QuantityInput />
        <CardAddToCartButton type="button">
          <ShoppingCartSimple size={22} weight="fill" />
        </CardAddToCartButton>
      </div>
    </CardFooterContainer>
  );
}
