import { createContext } from "react";

export type MenuContextType = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

export const MenuContext = createContext<MenuContextType>({
  isMenuOpen: false,
  setIsMenuOpen: (isMenuOpen) => isMenuOpen,
});
