import type { User } from "../types/user";

// Локальная JSON БД
export interface Database {
  users: User[];
}

// Инициализация БД
const initDB = (): Database => ({
  users: [],
});

// Загрузка БД из localStorage
export const loadDB = (): Database => {
  try {
    const stored = localStorage.getItem("stealth_inside_db");
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error("Error loading DB:", error);
  }
  return initDB();
};

// Сохранение БД в localStorage
export const saveDB = (db: Database): void => {
  try {
    localStorage.setItem("stealth_inside_db", JSON.stringify(db));
  } catch (error) {
    console.error("Error saving DB:", error);
  }
};

// Получение текущей БД
export const getDB = (): Database => {
  return loadDB();
};

// Обновление БД
export const updateDB = (updater: (db: Database) => Database): void => {
  const db = getDB();
  const updated = updater(db);
  saveDB(updated);
};

// Вспомогательные функции для работы с пользователями
export const getUserById = (id: string): User | undefined => {
  const db = getDB();
  return db.users.find((u) => u.id === id);
};

export const getUserByEmail = (email: string): User | undefined => {
  const db = getDB();
  return db.users.find((u) => u.email === email);
};

export const createUser = (user: Omit<User, "id" | "createdAt">): User => {
  const newUser: User = {
    ...user,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  updateDB((db) => ({
    ...db,
    users: [...db.users, newUser],
  }));
  return newUser;
};
