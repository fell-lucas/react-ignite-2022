import { enableMapSet } from 'immer';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles';
import { defaultTheme } from './styles/themes';
import { Transactions } from './pages';
import { TransactionsProvider } from './contexts';
import { ProjectInformation } from './components';
import './i18n';

enableMapSet();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <Transactions />
        <ProjectInformation />
      </TransactionsProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
