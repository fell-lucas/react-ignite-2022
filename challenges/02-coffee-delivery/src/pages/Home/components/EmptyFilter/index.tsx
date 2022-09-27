import { SectionTitle } from '../../../../styles/shared';
import { EmptyFilterContainer } from './styles';
import { useTranslation } from 'react-i18next';

export function EmptyFilter() {
  const { t } = useTranslation('home');
  return (
    <EmptyFilterContainer>
      <SectionTitle>{t('catalog.empty-filter')}</SectionTitle>
    </EmptyFilterContainer>
  );
}
