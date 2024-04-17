import { createContext, ReactNode, useState, useEffect } from "react";

import Cookies from "js-cookie";

export interface AuthContextType {
  accesstoken: string | undefined;
  isLoggedIn: boolean;
  updateIsLoggedIn: (value: boolean) => void;
  updateAccessToken: (value: string) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [accesstoken, setAccesstoken] = useState<string | undefined>(
    Cookies.get("accesstoken")
  );

  const updateAccessToken = (accesstoken: string) => {
    setAccesstoken(accesstoken);
  };

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    Cookies.get("accesstoken") !== undefined ? true : false
  );

  const updateIsLoggedIn = (value: boolean) => {
    setIsLoggedIn(value);
  };

  useEffect(() => {
    if (accesstoken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [accesstoken]);

  return (
    <AuthContext.Provider
      value={{
        accesstoken,
        updateAccessToken,
        updateIsLoggedIn,
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
