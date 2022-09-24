import { MapPin, ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import { CartContext } from '../../contexts';
import { defaultTheme } from '../../styles/themes';
import { IconContainer } from '../IconContainer';
import { CartButton, HeaderContainer } from './styles';

export function Header() {
  const { cartState } = useContext(CartContext);

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
          {cartState.totalItems > 0 && (
            <span>{cartState.totalItems < 100 ? cartState.totalItems : '+99'}</span>
          )}
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </nav>
    </HeaderContainer>
  );
}
