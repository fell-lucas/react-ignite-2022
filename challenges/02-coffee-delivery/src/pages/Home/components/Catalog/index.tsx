import { CatalogContainer, CatalogFilter, CatalogHeader, CatalogTitle } from './styles';
import { useCallback, useEffect, useState } from 'react';

import { Card } from '../Card';
import { Coffee } from '../../../../reducers';
import produce from 'immer';

enum CoffeeCategories {
  Traditional,
  Iced,
  WithMilk,
  Special,
  Alcoholic,
}

const coffeeList = await fetch('./coffee-list.json')
  .then((r) => r.json())
  .then((data: Coffee[]) => data);

export function Catalog() {
  const [filteredCoffeeList, setFilteredCoffeeList] = useState<Coffee[]>([]);
  const [activeFilters, setActiveFilters] = useState<Set<CoffeeCategories>>(new Set());

  useEffect(() => {
    setFilteredCoffeeList(coffeeList);
  }, []);

  const handleUpdateActiveFilters = useCallback(
    (filter: CoffeeCategories) => {
      if (activeFilters.has(filter)) {
        setActiveFilters(
          produce((draft) => {
            draft.delete(filter);
          }),
        );
      } else {
        setActiveFilters(
          produce((draft) => {
            draft.add(filter);
          }),
        );
      }
    },
    [activeFilters],
  );

  useEffect(() => {
    if (activeFilters.size > 0) {
      setFilteredCoffeeList(
        produce(coffeeList, (draft) => {
          return draft.filter((coffee) => {
            const categoryMatches = [];
            const categoryIds = coffee.categories.reduce<number[]>((acc, cur) => {
              acc.push(cur.id);
              return acc;
            }, []);
            for (const filter of activeFilters) {
              categoryMatches.push(categoryIds.includes(filter));
            }
            return !categoryMatches.includes(false);
          });
        }),
      );
    }
  }, [activeFilters]);

  return (
    <div>
      <CatalogHeader>
        <CatalogTitle>Nossos cafés</CatalogTitle>
        <div>
          <CatalogFilter
            onClick={() => handleUpdateActiveFilters(CoffeeCategories.Traditional)}
            selected={activeFilters.has(CoffeeCategories.Traditional)}
          >
            Tradicional
          </CatalogFilter>
          <CatalogFilter
            onClick={() => handleUpdateActiveFilters(CoffeeCategories.Special)}
            selected={activeFilters.has(CoffeeCategories.Special)}
          >
            Especial
          </CatalogFilter>
          <CatalogFilter
            onClick={() => handleUpdateActiveFilters(CoffeeCategories.WithMilk)}
            selected={activeFilters.has(CoffeeCategories.WithMilk)}
          >
            Com leite
          </CatalogFilter>
          <CatalogFilter
            onClick={() => handleUpdateActiveFilters(CoffeeCategories.Alcoholic)}
            selected={activeFilters.has(CoffeeCategories.Alcoholic)}
          >
            Alcoólico
          </CatalogFilter>
          <CatalogFilter
            onClick={() => handleUpdateActiveFilters(CoffeeCategories.Iced)}
            selected={activeFilters.has(CoffeeCategories.Iced)}
          >
            Gelado
          </CatalogFilter>
        </div>
      </CatalogHeader>
      <CatalogContainer>
        {filteredCoffeeList.map((coffee) => (
          <Card coffee={coffee} key={coffee.id} />
        ))}
      </CatalogContainer>
    </div>
  );
}
