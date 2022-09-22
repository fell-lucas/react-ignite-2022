import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import { defaultTheme } from '../../styles/themes';
import { IconContainer } from '../IconContainer';
import { CartButton, HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img alt="" src={Logo} />
      </NavLink>
      <nav>
        <IconContainer
          bgColor={defaultTheme.colors.brandPurpleLight}
          iconColor={defaultTheme.colors.brandPurple}
          text="Porto Alegre, RS"
          textColor={defaultTheme.colors.brandPurpleDark}
        >
          <MapPin size={22} weight="fill" />
        </IconContainer>
        <CartButton to="/checkout">
          <span>3</span>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </nav>
    </HeaderContainer>
  );
}
