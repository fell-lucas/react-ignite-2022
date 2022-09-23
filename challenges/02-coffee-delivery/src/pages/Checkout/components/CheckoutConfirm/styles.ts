import styled from 'styled-components';

export const ValueDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ValueDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: ${(props) => props.theme.colors.baseText};
    font-size: ${(props) => props.theme.typography.textRegularS};
  }

  h4 {
    color: ${(props) => props.theme.colors.baseText};
  }

  h3 {
    color: ${(props) => props.theme.colors.baseSubtitle};
    font-size: ${(props) => props.theme.typography.textBoldL};
    font-weight: 700;
  }
`;

export const CheckoutConfirmButton = styled.button`
  background-color: ${(props) => props.theme.colors.brandYellow};
  padding: 12px 8px;
  width: 100%;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.baseWhite};
  border-radius: 6px;
  border: none;
  margin-top: 24px;
  cursor: pointer;

  font-size: ${(props) => props.theme.typography.componentsButtonG};

  &:hover {
    background-color: ${(props) => props.theme.colors.brandYellowDark};
  }
`;
