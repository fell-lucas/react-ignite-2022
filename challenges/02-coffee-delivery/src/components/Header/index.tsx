import { MapPin, ShoppingCart } from 'phosphor-react';
import Logo from '../../assets/Logo.svg';
import { Location, Cart, HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <img alt="" src={Logo} />
      <nav>
        <Location>
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </Location>
        <Cart>
          <ShoppingCart size={22} weight="fill" />
        </Cart>
      </nav>
    </HeaderContainer>
  );
}
