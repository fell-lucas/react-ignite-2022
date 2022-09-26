import { SectionTitle } from '../../../../styles/shared';
import { EmptyFilterContainer } from './styles';

export function EmptyFilter() {
  return (
    <EmptyFilterContainer>
      <SectionTitle>
        Nenhum resultado encontrado para essa combinação de filtros.
      </SectionTitle>
    </EmptyFilterContainer>
  );
}
