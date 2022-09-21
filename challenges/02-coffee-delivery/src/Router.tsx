import { createBrowserRouter } from "react-router-dom";
import { Checkout, Home, Success } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/checkout",
    element: <Checkout />,
    // children: [
    //   {
    //     path: "/checkout/success",
    //     element: <Success />
    //   }
    // ]
  }
])