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
