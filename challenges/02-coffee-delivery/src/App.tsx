import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CartProvider } from './contexts';
import { CheckoutFormProvider } from './forms/checkout';
import { router } from './Router';
import { GlobalStyle } from './styles';
import { defaultTheme } from './styles/themes';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <CheckoutFormProvider>
          <RouterProvider router={router} />
        </CheckoutFormProvider>
      </CartProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
