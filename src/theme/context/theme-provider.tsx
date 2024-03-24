import { FC, ReactNode, createContext, useState } from "react";
import { useToggle } from "react-use";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { dark } from "../modes/dark";
import { light } from "../modes/light";

export interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useToggle(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <MuiThemeProvider theme={isDark ? dark : light}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
