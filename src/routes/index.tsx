import { Navigate, useRoutes } from "react-router-dom";

import { SignupPage, LoginPage, ToDoPage } from "./elements";

import { useAuthContext } from "@/hooks/use-auth-context";
import { TodoContextProvider } from "@/context/todo-context";

const Router = () => {
  const { isLoggedIn } = useAuthContext();

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
      element: isLoggedIn ? (
        <TodoContextProvider>
          <ToDoPage />
        </TodoContextProvider>
      ) : (
        <Navigate to="/login" />
      ),
    },
  ]);
};

export default Router;
