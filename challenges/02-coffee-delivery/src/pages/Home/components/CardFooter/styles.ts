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
