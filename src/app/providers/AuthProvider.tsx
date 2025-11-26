import type { ReactNode } from "react";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import type { AuthContextType, User, UserType } from "../../shared/types/user";
import { getUserByEmail, createUser, getDB } from "../../shared/lib/db";
import { UserStatus } from "../../shared/types/user";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Загрузка пользователя из localStorage при монтировании
  useEffect(() => {
    const storedUserId = localStorage.getItem("stealth_inside_user_id");
    if (storedUserId) {
      const db = getDB();
      const foundUser = db.users.find((u) => u.id === storedUserId);
      if (foundUser) {
        setUser(foundUser);
      }
    }
    setIsLoading(false);
  }, []);

  const login = useCallback(
    async (email: string, password: string): Promise<boolean> => {
      const foundUser = getUserByEmail(email);
      if (foundUser && foundUser.password === password) {
        setUser(foundUser);
        localStorage.setItem("stealth_inside_user_id", foundUser.id);
        return true;
      }
      return false;
    },
    []
  );

  const register = useCallback(
    async (
      email: string,
      password: string,
      type: UserType
    ): Promise<boolean> => {
      // Проверка, что пользователь с таким email не существует
      if (getUserByEmail(email)) {
        return false;
      }

      const newUser = createUser({
        email,
        password, // В реальном проекте здесь должен быть хэш
        type,
        status: UserStatus.PENDING, // Требует проверки и аккредитации
      });

      setUser(newUser);
      localStorage.setItem("stealth_inside_user_id", newUser.id);
      return true;
    },
    []
  );

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("stealth_inside_user_id");
  }, []);

  const value: AuthContextType = {
    user,
    login,
    register,
    logout,
    isAuthenticated: !!user,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
