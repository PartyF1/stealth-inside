import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const WelcomePage = lazy(() => import("../../pages/WelcomePage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RegistrationPage />,
  },
]);
