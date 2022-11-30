import { createBrowserRouter } from "react-router-dom";
import App from "../pages/app/App";
import { LoginPage } from "../pages/login";
import { ProductPage } from "../pages/product";
import { StatePage } from "../pages/state";
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
]);
