export const defaultTheme = {
  colors: {
    // ФОН (BACKGROUND)
    background: {
      dark: "#2A2A2A", // Темно-серый фон
      light: "#F5F5F0", // Светло-бежевый/off-white фон
    },
    // АКЦЕНТ (ACCENT)
    accent: "#F3E5A1", // Бледно-желтый/кремовый акцент
    // ТЕКСТ ЦВЕТ (TEXT COLOR)
    text: {
      // Текст на белом фоне
      onLight: {
        primary: "#1A1A1A", // Текст на белом фоне первого порядка (темно-серый)
        secondary: "#6B6B6B", // Текст на белом фоне второго порядка (средне-серый)
      },
      // Текст на черном фоне
      onDark: {
        primary: "#FFFFFF", // Текст на черном фоне первого порядка (белый)
        secondary: "#9B9B9B", // Текст на черном фоне второго порядка (средне-серый)
      },
    },
  },
} as const;

export type ThemeType = typeof defaultTheme;
