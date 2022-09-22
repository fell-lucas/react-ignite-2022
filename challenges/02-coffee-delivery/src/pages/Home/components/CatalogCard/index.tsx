import { ShoppingCart } from 'phosphor-react';
import { IconContainer } from '../../../../components';
import { defaultTheme } from '../../../../styles/themes';
import { Coffee } from '../Catalog';
import {
  CoffeeCardContainer,
  CoffeeCategory,
  CoffeeCategoryContainer,
  CoffeeDescription,
  CoffeeFooter,
  CoffeeImage,
  CoffeeName,
  CoffeePrice,
  CoffeeQuantityButton,
  CoffeeQuantityContainer,
} from './styles';

interface CatalogCardProps {
  coffee: Coffee;
}

export function CatalogCard({ coffee }: CatalogCardProps) {
  return (
    <CoffeeCardContainer>
      <CoffeeImage alt={coffee.name} src={`./coffee-images/${coffee.image}`} />
      <CoffeeCategoryContainer>
        {coffee.categories.map((category) => (
          <CoffeeCategory key={category}>{category}</CoffeeCategory>
        ))}
      </CoffeeCategoryContainer>
      <CoffeeName>{coffee.name}</CoffeeName>
      <CoffeeDescription>{coffee.description}</CoffeeDescription>
      <CoffeeFooter>
        <CoffeePrice>
          R$&nbsp;<h2>{coffee.price}</h2>
        </CoffeePrice>
        <div>
          <CoffeeQuantityContainer>
            <CoffeeQuantityButton>-</CoffeeQuantityButton>
            <span>1</span>
            <CoffeeQuantityButton>+</CoffeeQuantityButton>
          </CoffeeQuantityContainer>
          <IconContainer bgColor={defaultTheme.colors.brandPurpleDark}>
            <ShoppingCart size={22} weight="fill" />
          </IconContainer>
        </div>
      </CoffeeFooter>
    </CoffeeCardContainer>
  );
}
