import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react';
import { IconContainer } from '../../../../components';
import { defaultTheme } from '../../../../styles/themes';
import { IntroListContainer, IntroListItem } from './styles';
import { useTranslation } from 'react-i18next';

export function IntroList() {
  const { t } = useTranslation('home');

  return (
    <IntroListContainer>
      <IntroListItem>
        <IconContainer bgColor={defaultTheme.colors.brandYellowDark} borderRadius={999}>
          <ShoppingCart size={16} weight="fill" />
        </IconContainer>
        <p>{t('intro.list-1')}</p>
      </IntroListItem>
      <IntroListItem>
        <IconContainer bgColor={defaultTheme.colors.baseText} borderRadius={999}>
          <Package size={16} weight="fill" />
        </IconContainer>
        <p>{t('intro.list-2')}</p>
      </IntroListItem>
      <IntroListItem>
        <IconContainer bgColor={defaultTheme.colors.brandYellow} borderRadius={999}>
          <Timer size={16} weight="fill" />
        </IconContainer>
        <p>{t('intro.list-3')}</p>
      </IntroListItem>
      <IntroListItem>
        <IconContainer bgColor={defaultTheme.colors.brandPurple} borderRadius={999}>
          <Coffee size={16} weight="fill" />
        </IconContainer>
        <p>{t('intro.list-4')}</p>
      </IntroListItem>
    </IntroListContainer>
  );
}
