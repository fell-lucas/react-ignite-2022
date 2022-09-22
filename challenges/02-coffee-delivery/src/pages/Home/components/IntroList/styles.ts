import styled from 'styled-components';

export const IntroListContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 5fr;
  gap: 20px;
`;

export const IntroListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  p {
    font-size: ${(props) => props.theme.typography.textRegularM}
    color: ${(props) => props.theme.colors.baseText};
    whitespace: no-wrap
  }
`;
