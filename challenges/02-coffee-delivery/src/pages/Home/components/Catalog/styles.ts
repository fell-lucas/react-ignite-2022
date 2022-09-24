import styled from 'styled-components';
import media from 'styled-media-query';

export const CatalogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 96px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    margin-left: 20px;
  }
`;

export const CatalogTitle = styled.h1`
  font-weight: 800;
  font-family: 'Baloo 2', cursive;
  font-size: ${(props) => props.theme.typography.titleL};
  color: ${(props) => props.theme.colors.baseSubtitle};
`;

export const CatalogFilter = styled.button`
  color: ${(props) => props.theme.colors.brandYellowDark};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: ${(props) => props.theme.typography.componentsTag};
  text-transform: uppercase;
  padding: 6px 12px;
  border-radius: 100px;
  border: solid 1px ${(props) => props.theme.colors.brandYellow};
  cursor: pointer;
  background: none;

  &:hover {
    background: ${(props) => props.theme.colors.brandYellowLight};
  }
`;

export const CatalogContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 32px;

  ${media.lessThan('large')`
    grid-template-columns: 1fr 1fr;
  `}

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
  `}
`;
