import { createContext, ReactNode, useState, useEffect } from "react";

export type User = {
  id: string;
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
};

export interface UserContextType {
  user: User | null;
  updateUser: (user: User) => void;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const updateUser = (user: User) => {
    setUser(user);
  };

  useEffect(() => {
    localStorage.getItem("user") &&
      setUser(JSON.parse(localStorage.getItem("user") as string));
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
