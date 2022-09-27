import { CatalogContainer, CatalogFilter, CatalogHeader, CatalogTitle } from './styles';
import { useCallback, useEffect, useState } from 'react';

import { Card } from '../Card';
import { Coffee } from '../../../../reducers';
import produce from 'immer';
import { EmptyFilter } from '../EmptyFilter';
import { useTranslation } from 'react-i18next';

enum CoffeeCategories {
  Traditional,
  Iced,
  WithMilk,
  Special,
  Alcoholic,
}

const DOLLAR_PRICE_IN_BRL = 5.26; // As of 2022-09-26

export function Catalog() {
  // TODO: use useReducer instead of two useStates
  const [initialCoffeeList, setInitialCoffeeList] = useState<Coffee[]>([]);
  const [filteredCoffeeList, setFilteredCoffeeList] = useState<Coffee[]>([]);
  const [activeFilters, setActiveFilters] = useState<Set<CoffeeCategories>>(new Set());
  const { t, i18n } = useTranslation('home');

  useEffect(() => {
    async function getInitialCoffeeList() {
      await fetch(`./locales/${i18n.resolvedLanguage}/coffee-list.json`)
        .then((r) => r.json())
        .then((data: Coffee[]) => {
          const dataWithFixedCurrency = data.map((coffee) =>
            i18n.resolvedLanguage === 'pt-BR'
              ? coffee
              : { ...coffee, price: coffee.price / DOLLAR_PRICE_IN_BRL },
          );
          setInitialCoffeeList(dataWithFixedCurrency);
          setFilteredCoffeeList(dataWithFixedCurrency);
        });
    }
    void getInitialCoffeeList();
  }, [i18n.resolvedLanguage]);

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
        <CatalogTitle>{t('catalog.title')}</CatalogTitle>
        <div>
          <CatalogFilter
            onClick={() => handleUpdateActiveFilters(CoffeeCategories.Traditional)}
            selected={activeFilters.has(CoffeeCategories.Traditional)}
          >
            {t('catalog.category.traditional')}
          </CatalogFilter>
          <CatalogFilter
            onClick={() => handleUpdateActiveFilters(CoffeeCategories.Special)}
            selected={activeFilters.has(CoffeeCategories.Special)}
          >
            {t('catalog.category.special')}
          </CatalogFilter>
          <CatalogFilter
            onClick={() => handleUpdateActiveFilters(CoffeeCategories.WithMilk)}
            selected={activeFilters.has(CoffeeCategories.WithMilk)}
          >
            {t('catalog.category.with-milk')}
          </CatalogFilter>
          <CatalogFilter
            onClick={() => handleUpdateActiveFilters(CoffeeCategories.Alcoholic)}
            selected={activeFilters.has(CoffeeCategories.Alcoholic)}
          >
            {t('catalog.category.alcoholic')}
          </CatalogFilter>
          <CatalogFilter
            onClick={() => handleUpdateActiveFilters(CoffeeCategories.Iced)}
            selected={activeFilters.has(CoffeeCategories.Iced)}
          >
            {t('catalog.category.iced')}
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
