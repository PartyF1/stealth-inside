export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isFieldEmpty = (value: string | undefined | null): boolean => {
  return !value || value.trim().length === 0;
};
