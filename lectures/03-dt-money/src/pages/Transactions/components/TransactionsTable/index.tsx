import { CalendarBlank, TagSimple } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useContextSelector } from 'use-context-selector';
import { TransactionsContext } from '../../../../contexts';
import { useTextFormat } from '../../../../hooks';
import {
  StyledTransactionsTable,
  PriceHighlight,
  TransactionsGrid,
  TransactionsCardFooter,
} from './styles';

const MEDIUM_WIDTH = 768;

export function TransactionsTable() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions,
  );
  const { price, date } = useTextFormat();

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  return width > MEDIUM_WIDTH ? (
    <StyledTransactionsTable>
      <tbody>
        {transactions.map((t) => (
          <tr key={t.id}>
            <td width="50%">{t.description}</td>
            <td>
              <PriceHighlight variant={t.type}>
                {t.type === 'outcome' && '- '}
                {price.format(t.price)}
              </PriceHighlight>
            </td>
            <td>{t.category}</td>
            <td>{date.format(new Date(t.createdAt))}</td>
          </tr>
        ))}
      </tbody>
    </StyledTransactionsTable>
  ) : (
    <TransactionsGrid>
      {transactions.map((t) => (
        <div key={t.id}>
          <span>{t.description}</span>
          <h3>
            <PriceHighlight variant={t.type}>
              {t.type === 'outcome' && '- '}
              {price.format(t.price)}
            </PriceHighlight>
          </h3>
          <TransactionsCardFooter>
            <div>
              <TagSimple size={16} />
              <span>{t.category}</span>
            </div>
            <div>
              <CalendarBlank size={16} />
              <span>{date.format(new Date(t.createdAt))}</span>
            </div>
          </TransactionsCardFooter>
        </div>
      ))}
    </TransactionsGrid>
  );
}
