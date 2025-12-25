import type { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { defaultTheme, type ThemeType } from "../../../shared/theme/theme";

interface ThemeProviderProps {
  children: ReactNode;
  theme?: ThemeType;
}

export const ThemeProvider = ({
  children,
  theme = defaultTheme,
}: ThemeProviderProps) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};
