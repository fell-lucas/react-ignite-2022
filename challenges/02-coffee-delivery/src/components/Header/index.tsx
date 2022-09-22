import { MapPin, ShoppingCart } from 'phosphor-react';
import Logo from '../../assets/Logo.svg';
import { defaultTheme } from '../../styles/themes';
import { IconContainer } from '../IconContainer';
import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <img alt="" src={Logo} />
      <nav>
        <IconContainer
          bgColor={defaultTheme.colors.brandPurpleLight}
          iconColor={defaultTheme.colors.brandPurple}
          text="Porto Alegre, RS"
          textColor={defaultTheme.colors.brandPurpleDark}
        >
          <MapPin size={22} weight="fill" />
        </IconContainer>
        <IconContainer
          bgColor={defaultTheme.colors.brandYellowLight}
          iconColor={defaultTheme.colors.brandYellow}
        >
          <ShoppingCart size={22} weight="fill" />
        </IconContainer>
      </nav>
    </HeaderContainer>
  );
}
