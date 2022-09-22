import styled from 'styled-components';

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.baseCard};
  border-radius: 6px 36px;
  margin-bottom: 8px;
  padding: 24px;
`;

export const CoffeeImage = styled.img`
  width: 120px;
  margin-top: -44px;
  margin-bottom: 12px;
`;

export const CoffeeCategoryContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const CoffeeCategory = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: ${(props) => props.theme.typography.componentsTag};
  font-weight: 700;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.brandYellowDark};
  padding: 4px 8px;
  background-color: ${(props) => props.theme.colors.brandYellowLight};
  border-radius: 100px;
`;

export const CoffeeName = styled.h3`
  font-size: ${(props) => props.theme.typography.titleS};
  color: ${(props) => props.theme.colors.baseSubtitle};
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const CoffeeDescription = styled.p`
  font-size: ${(props) => props.theme.typography.textRegularS};
  color: ${(props) => props.theme.colors.baseLabel};
  text-align: center;
  margin-bottom: 32px;
`;

export const CoffeeFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  div {
    display: flex;
  }
`;

export const CoffeePrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  font-family: 'Baloo 2', cursive;

  h2 {
    font-size: ${(props) => props.theme.typography.titleM};
    font-weight: 800;
  }
`;

export const CoffeeQuantityContainer = styled.div``;

export const CoffeeQuantityButton = styled.button``;
