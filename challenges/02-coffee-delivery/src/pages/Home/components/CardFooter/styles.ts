import styled from 'styled-components';

export const CardFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  div {
    display: flex;
  }

  div:first-child {
    gap: 4px;
  }

  div:last-child {
    gap: 8px;
  }
`;

export const CardAddToCartButton = styled.button`
  background-color: ${(props) => props.theme.colors.brandPurpleDark};
  color: ${(props) => props.theme.colors.baseWhite};
  padding: 8px;
  display: flex;
  justify-items: center;
  align-items: center;
  border-radius: 6px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.brandPurple};
  }
`;

export const CardPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  font-family: 'Baloo 2', cursive;

  h2 {
    font-size: ${(props) => props.theme.typography.titleM};
    font-weight: 800;
  }
`;

export const CardQtyContainer = styled.div`
  padding: 8.5px 8px;
  background-color: ${(props) => props.theme.colors.baseButton};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  p {
    color: ${(props) => props.theme.colors.baseTitle};
    font-size: ${(props) => props.theme.typography.textRegularM};
    text-align: center;
    line-height: 130%;
    padding: 0px 2px;
  }
`;

export const CardQtyButton = styled.button`
  display: flex;
  background: none;
  border: none;

  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.brandPurple};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.brandPurpleDark};
  }
`;
