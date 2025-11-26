import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const WelcomePage = lazy(() => import("../../pages/WelcomePage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
]);
