import styled from 'styled-components';

export const BaseInput = styled.div`
  background: ${(props) => props.theme.colors.baseInput};
  border: 1px solid ${(props) => props.theme.colors.baseButton};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    padding: 12px;
    font-size: ${(props) => props.theme.typography.textRegularS};
    color: ${(props) => props.theme.colors.baseText};
    font-weight: 400;
    font-family: 'Roboto';
    border: none;
    background: none;
    outline: none;
    width: 100%;
  }

  input::placeholder {
    color: ${(props) => props.theme.colors.baseLabel};
  }

  p {
    color: ${(props) => props.theme.colors.baseLabel};
    font-style: italic;
    font-size: 12px;
    padding: 0px 12px;
  }
`;
