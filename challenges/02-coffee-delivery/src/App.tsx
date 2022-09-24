import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CartProvider } from './contexts';
import { router } from './Router';
import { GlobalStyle } from './styles';
import { defaultTheme } from './styles/themes';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
