import { createContext, useContext } from "react";
import type { User } from "../../../shared/types/user";

interface UserContextValue {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const UserContext = createContext<UserContextValue | null>(null);

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error("useUser must be used within UserProvider");
  }
  return ctx;
};
