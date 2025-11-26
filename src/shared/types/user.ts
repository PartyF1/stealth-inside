export enum UserType {
  MYSTERY_SHOPPER = "mystery_shopper",
  BUSINESS = "business",
}

export enum UserStatus {
  PENDING = "pending", // Ожидает проверки
  VERIFIED = "verified", // Проверен и аккредитован
  REJECTED = "rejected", // Отклонён
}

export interface User {
  id: string;
  email: string;
  password: string; // В реальном проекте это должен быть хэш
  type: UserType;
  status: UserStatus;
  createdAt: string;
  // Для тайного покупателя
  resume?: {
    name?: string;
    phone?: string;
    experience?: string;
  };
  // Для бизнеса
  business?: {
    name?: string;
    inn?: string;
    description?: string;
  };
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (
    email: string,
    password: string,
    type: UserType
  ) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}
