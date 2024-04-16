import { Suspense, lazy, LazyExoticComponent, FC } from "react";

const Loadable = (Component: LazyExoticComponent<FC>) => () =>
  (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );

export const LoginPage = Loadable(
  lazy(() => import("../pages/login-page.tsx") as Promise<{ default: FC }>)
);
export const SignupPage = Loadable(
  lazy(() => import("../pages/signup-page.tsx") as Promise<{ default: FC }>)
);
export const ToDoPage = Loadable(
  lazy(() => import("../pages/todo-page.tsx") as Promise<{ default: FC }>)
);
