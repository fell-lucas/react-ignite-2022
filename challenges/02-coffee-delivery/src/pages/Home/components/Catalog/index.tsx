import { CatalogContainer, CatalogFilter, CatalogHeader, CatalogTitle } from './styles';
import { useCallback, useEffect, useState } from 'react';

import { Card } from '../Card';
import { Coffee } from '../../../../reducers';
import produce from 'immer';
import { EmptyFilter } from '../EmptyFilter';

enum CoffeeCategories {
  Traditional,
  Iced,
  WithMilk,
  Special,
  Alcoholic,
}

export function Catalog() {
  // TODO: use useReducer instead of two useStates
  const [initialCoffeeList, setInitialCoffeeList] = useState<Coffee[]>([]);
  const [filteredCoffeeList, setFilteredCoffeeList] = useState<Coffee[]>([]);
  const [activeFilters, setActiveFilters] = useState<Set<CoffeeCategories>>(new Set());

  useEffect(() => {
    async function getInitialCoffeeList() {
      await fetch('./coffee-list.json')
        .then((r) => r.json())
        .then((data: Coffee[]) => {
          setInitialCoffeeList(data);
          setFilteredCoffeeList(data);
        });
    }
    void getInitialCoffeeList();
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
    setFilteredCoffeeList(
      produce(initialCoffeeList, (draft) => {
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
  }, [activeFilters, initialCoffeeList]);

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
      {filteredCoffeeList.length > 0 ? (
        <CatalogContainer>
          {filteredCoffeeList.map((coffee) => (
            <Card coffee={coffee} key={coffee.id} />
          ))}
        </CatalogContainer>
      ) : (
        <EmptyFilter />
      )}
    </div>
  );
}
