// import { ThemeProvider } from "@/components/theme-provider";

import { BrowserRouter } from "react-router-dom";
import Router from "@/routes";
import { AuthContextProvider } from "./context/auth-context";
import { Toaster } from "@/components/ui/sonner";
import { UserContextProvider } from "./context/user-context";
import { ThemeProvider } from "@/components/themes/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <AuthContextProvider>
          <UserContextProvider>
            <Toaster />
            <Router />
          </UserContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
