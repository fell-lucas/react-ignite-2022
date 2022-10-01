import { Header, Summary } from '../../components';
import { SearchForm, TransactionsTable } from './components';
import { TransactionsContainer } from './styles';

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable />
      </TransactionsContainer>
    </div>
  );
}
