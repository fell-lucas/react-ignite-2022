import { useEffect, useState } from 'react';
import { CatalogCard } from '../CatalogCard';
import { CatalogHeader, CatalogTitle, CatalogFilter, CatalogContainer } from './styles';

export interface Coffee {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  categories: string[];
}

export function Catalog() {
  const [coffeeList, setCoffeeList] = useState<Coffee[]>([]);

  useEffect(() => {
    async function fetchCoffees() {
      const response = await fetch('./coffee-list.json');
      const coffees = (await response.json()) as Coffee[];

      setCoffeeList(coffees);
    }

    void fetchCoffees();
  }, []);

  return (
    <div>
      <CatalogHeader>
        <CatalogTitle>Nossos cafés</CatalogTitle>
        <div>
          <CatalogFilter>Tradicional</CatalogFilter>
          <CatalogFilter>Especial</CatalogFilter>
          <CatalogFilter>Com leite</CatalogFilter>
          <CatalogFilter>Alcoólico</CatalogFilter>
          <CatalogFilter>Gelado</CatalogFilter>
        </div>
      </CatalogHeader>
      <CatalogContainer>
        {coffeeList.map((coffee) => (
          <CatalogCard coffee={coffee} key={coffee.id} />
        ))}
      </CatalogContainer>
    </div>
  );
}
