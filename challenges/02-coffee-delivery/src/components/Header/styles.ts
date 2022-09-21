import styled from 'styled-components';

const HeaderItem = styled.div`
  padding: 8px;
  gap: 4px;
  border-radius: 6px;
  line-height: 18.2px;
  display: flex;
  justify-items: center;
  align-items: center;
`;

export const Location = styled(HeaderItem)`
  color: ${(props) => props.theme.brandPurple};
  background-color: ${(props) => props.theme.brandPurpleLight};
  p {
    color: ${(props) => props.theme.brandPurpleDark};
  }
`;

export const Cart = styled(HeaderItem)`
  color: ${(props) => props.theme.brandYellow};
  background-color: ${(props) => props.theme.brandYellowLight};
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px calc(100% / 12);

  nav {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }
`;
