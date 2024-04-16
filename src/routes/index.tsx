import { Navigate, useRoutes } from "react-router-dom";
// import SignupPage from "@/pages/SignupPage";
// import { useAuthContext } from "@/hooks/useAuthContext";
import { SignupPage, LoginPage, ToDoPage } from "./elements";

const Router = () => {
  const isLoggedIn = false;

  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/login" />,
    },
    {
      path: "/login",
      element: isLoggedIn ? (
        <Navigate to="/todoDashboard" replace />
      ) : (
        <LoginPage />
      ),
    },
    {
      path: "/signup",
      element: isLoggedIn ? (
        <Navigate to="/todoDashboard" replace />
      ) : (
        <SignupPage />
      ),
    },
    {
      path: "/todoDashboard",
      element: isLoggedIn ? <ToDoPage /> : <Navigate to="/login" />,
    },
  ]);
};

export default Router;
