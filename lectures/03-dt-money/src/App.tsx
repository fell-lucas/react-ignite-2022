import { enableMapSet } from 'immer';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles';
import { defaultTheme } from './styles/themes';
import './i18n';

enableMapSet();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
