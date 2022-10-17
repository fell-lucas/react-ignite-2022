import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useDraggable } from 'react-use-draggable-scroll';
import { useTheme } from 'styled-components';
import { useTextFormat } from '../../hooks';
import { useSummary } from '../../hooks/useSummary';
import { SummaryCard, SummaryContainer } from './styles';

export function Summary() {
  const theme = useTheme();
  const summary = useSummary();
  const { t } = useTranslation('home');
  const { price } = useTextFormat();
  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
  const { events } = useDraggable(ref);

  return (
    <SummaryContainer ref={ref} {...events}>
      <SummaryCard>
        <header>
          <span>{t('entradas')}</span>
          <ArrowCircleUp color={theme['green-300']} size={32} />
        </header>

        <strong>{price.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>{t('saidas')}</span>
          <ArrowCircleDown color={theme['red-300']} size={32} />
        </header>

        <strong>{price.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant={summary.total < 0 ? 'negative' : 'positive'}>
        <header>
          <span>{t('total')}</span>
          <CurrencyDollar color={theme.white} size={32} />
        </header>

        <strong>{price.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
