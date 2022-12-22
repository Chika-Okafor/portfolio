import { createContext } from "react";

// export enum Menu {
//   Open = "Open",
//   Close = "Close",
// }

// export type MenuContextType = {
//   theme: Menu;
//   setTheme: (Menu: Menu) => void;
// };

// export const MenuContext = createContext<MenuContextType>({
//   theme: Menu.Close,
//   setTheme: (theme) => console.warn("no theme provider"),
// });

// export const useMenuToggle = () => useContext(MenuContext);

export type MenuContextType = {
  menu: boolean;
  setMenu: (menu: boolean) => void;
};

export const MenuContext = createContext<MenuContextType>({
  menu: false,
  setMenu: (menu) => menu,
});

// export const MenuContext = createContext(menu);
