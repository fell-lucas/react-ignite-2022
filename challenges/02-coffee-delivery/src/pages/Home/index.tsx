import IntroImage from '../../assets/intro-image.png';
import { Catalog, IntroList } from './components';
import { IntroBackground, IntroContainer, Subtitle, Title } from './styles';
import { useTranslation } from 'react-i18next';

export function Home() {
  const { t } = useTranslation('home');

  return (
    <>
      <IntroBackground />
      <IntroContainer>
        <div>
          <Title>{t('intro.title')}</Title>
          <Subtitle>{t('intro.subtitle')}</Subtitle>
          <IntroList />
        </div>
        <img alt={t('intro.img-alt')} src={IntroImage} />
      </IntroContainer>
      <Catalog />
    </>
  );
}
