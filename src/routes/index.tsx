import { createBrowserRouter } from "react-router-dom";
import App from "../pages/app/App";
import Testing from "../pages/dashboard";
import { LoginPage } from "../pages/login";
import { ProductPage } from "../pages/product";
import { StatePage } from "../pages/state";
import { SwrPage } from "../pages/swr";
import { UserPage } from "../pages/user";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <LoginPage />
      </>
    ),
  },
  {
    path: "home",
    element: <App />,
  },
  {
    path: "product",
    element: <ProductPage />,
  },
  {
    path: "user",
    element: <UserPage />,
  },
  {
    path: "state",
    element: <StatePage />,
  },
  {
    path: "das",
    element: <Testing />,
  },
  {
    path: "swr",
    element: <SwrPage />,
  },
]);
