import { createBrowserRouter } from 'react-router-dom';
import { DefaultLayout } from './layouts';
import { Checkout, Home } from './pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
        // children: [
        //   {
        //     path: "/checkout/success",
        //     element: <Success />
        //   }
        // ]
      },
    ],
  },
]);
