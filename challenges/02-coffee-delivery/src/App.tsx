import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CartProvider } from './contexts';
import { router } from './Router';
import { GlobalStyle } from './styles';
import { defaultTheme } from './styles/themes';

export const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </QueryClientProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
