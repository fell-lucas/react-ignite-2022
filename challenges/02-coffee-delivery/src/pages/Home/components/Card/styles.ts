import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.baseCard};
  border-radius: 6px 36px;
  margin-bottom: 8px;
  padding: 24px;
`;

export const CardImage = styled.img`
  width: 120px;
  margin-top: -44px;
  margin-bottom: 12px;
`;

export const CardCategoryContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const CardCategory = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: ${(props) => props.theme.typography.componentsTag};
  font-weight: 700;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.brandYellowDark};
  padding: 4px 8px;
  background-color: ${(props) => props.theme.colors.brandYellowLight};
  border-radius: 100px;
`;

export const CardName = styled.h3`
  font-size: ${(props) => props.theme.typography.titleS};
  color: ${(props) => props.theme.colors.baseSubtitle};
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const CardDescription = styled.p`
  font-size: ${(props) => props.theme.typography.textRegularS};
  color: ${(props) => props.theme.colors.baseLabel};
  text-align: center;
  margin-bottom: 32px;
`;
