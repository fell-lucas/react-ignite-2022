import {
  CardCategory,
  CardCategoryContainer,
  CardContainer,
  CardDescription,
  CardImage,
  CardName,
} from './styles';

import { CardFooter } from '../CardFooter';
import { Coffee } from '../../../../reducers';

interface CatalogCardProps {
  coffee: Coffee;
}

export function Card({ coffee }: CatalogCardProps) {
  return (
    <CardContainer>
      <CardImage alt={coffee.name} src={`./coffee-images/${coffee.image}`} />
      <CardCategoryContainer>
        {coffee.categories.map((category) => (
          <CardCategory key={category.name}>{category.name}</CardCategory>
        ))}
      </CardCategoryContainer>
      <CardName>{coffee.name}</CardName>
      <CardDescription>{coffee.description}</CardDescription>
      <CardFooter coffee={coffee} />
    </CardContainer>
  );
}
