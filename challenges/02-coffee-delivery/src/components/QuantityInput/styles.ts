import styled from 'styled-components';

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
