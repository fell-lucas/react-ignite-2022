import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react';
import { IconContainer } from '../../../../components';
import { defaultTheme } from '../../../../styles/themes';
import { IntroListContainer, IntroListItem } from './styles';

export function IntroList() {
  return (
    <IntroListContainer>
      <IntroListItem>
        <IconContainer bgColor={defaultTheme.colors.brandYellowDark} borderRadius={999}>
          <ShoppingCart size={16} weight="fill" />
        </IconContainer>
        <p>Compra simples e segura</p>
      </IntroListItem>
      <IntroListItem>
        <IconContainer bgColor={defaultTheme.colors.baseText} borderRadius={999}>
          <Package size={16} weight="fill" />
        </IconContainer>
        <p>Embalagem mantém o café intacto</p>
      </IntroListItem>
      <IntroListItem>
        <IconContainer bgColor={defaultTheme.colors.brandYellow} borderRadius={999}>
          <Timer size={16} weight="fill" />
        </IconContainer>
        <p>Entrega rápida e rastreada</p>
      </IntroListItem>
      <IntroListItem>
        <IconContainer bgColor={defaultTheme.colors.brandPurple} borderRadius={999}>
          <Coffee size={16} weight="fill" />
        </IconContainer>
        <p>O café chega fresquinho até você</p>
      </IntroListItem>
    </IntroListContainer>
  );
}
