import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  margin: 20px 12px;

  background-color: ${(props) => props.theme.colors.baseBackgroundOpaque};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  position: sticky;
  top: 0;

  nav {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }
`;

export const CartButton = styled(NavLink)`
  padding: 8px;
  gap: 4px;
  border-radius: 6px;
  display: flex;
  justify-items: center;
  align-items: center;
  color: ${(props) => props.theme.colors.brandYellow};
  background-color: ${(props) => props.theme.colors.brandYellowLight};
  border: solid 2px transparent;
  cursor: pointer;
  position: relative;

  &:hover {
    border: solid 2px ${(props) => props.theme.colors.brandYellow};
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.baseWhite};
    font-weight: 700;
    font-size: ${(props) => props.theme.typography.textBoldS};
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme.colors.brandYellowDark};
    border-radius: 100%;
    position: absolute;
    top: -25%;
    right: -25%;
  }
`;
