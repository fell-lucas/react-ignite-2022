import styled from 'styled-components';

export const BaseIconButton = styled.button`
  display: flex;
  color: ${(props) => props.theme.colors.brandPurple};
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.baseButton};
  border-radius: 6px;
  gap: 4px;
  border: none;
  cursor: pointer;

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
