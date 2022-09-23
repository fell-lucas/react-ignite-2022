import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 40px;
`;

export const LeftContainer = styled.div`
  padding: 40px;
  background: ${(props) => props.theme.colors.baseCard};
  gap: 32px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  margin-top: 15px;
`;

export const SectionTitle = styled.h3`
  font-weight: 700;
  font-family: 'Baloo 2';
  line-height: 130%;
  font-size: ${(props) => props.theme.typography.titleXs};
`;

export const LeftTitleContainer = styled.div`
  display: flex;
  gap: 12px;

  div {
    h4 {
      color: ${(props) => props.theme.colors.baseSubtitle};
      font-size: ${(props) => props.theme.typography.textRegularM};
    }

    p {
      color: ${(props) => props.theme.colors.baseText};
      font-size: ${(props) => props.theme.typography.textRegularS};
    }
  }
`;

export const LeftPaymentMethodsContainer = styled.div`
  display: flex;
  gap: 12px;

  button {
    display: flex;
    flex: 1;
    gap: 12px;
    border: solid 1px transparent;
    color: ${(props) => props.theme.colors.brandPurple};
    border-radius: 6px;
    background-color: ${(props) => props.theme.colors.baseButton};
    padding: 16px;

    &:hover {
      background-color: ${(props) => props.theme.colors.baseHover};
    }

    &:focus {
      background-color: ${(props) => props.theme.colors.brandPurpleLight};
      border: solid 1px ${(props) => props.theme.colors.brandPurple};
    }

    p {
      font-family: 'Roboto';
      font-weight: 400;
      color: ${(props) => props.theme.colors.baseText};
      font-size: ${(props) => props.theme.typography.componentsButtonS};
      text-transform: uppercase;
    }
  }
`;

export const RightContainer = styled.div`
  padding: 40px;
  border-radius: 6px 44px;
  background: ${(props) => props.theme.colors.baseCard};
  margin-top: 15px;
`;

export const SelectedItem = styled.div`
  padding: 8px 4px;
  position: relative;
  display: flex;
  gap: 20px;

  img {
    width: 64px;
    height: 64px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    h3 {
      font-size: ${(props) => props.theme.typography.textRegularM};
      font-weight: 400;
      font-family: 'Roboto';
      white-space: nowrap;
    }

    div {
      display: flex;
      flex-direction: row;
      gap: 8px;
    }
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  padding: 8.5px 8px;
  color: ${(props) => props.theme.colors.brandPurple};
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.baseButton};
  border-radius: 6px;
  gap: 4px;
  border: none;

  &:hover {
    background-color: ${(props) => props.theme.colors.baseHover};
  }

  p {
    text-transform: uppercase;
    font-size: ${(props) => props.theme.typography.componentsButtonS};
    color: ${(props) => props.theme.colors.baseText};
    text-align: center;
    line-height: 100%;
  }
`;
