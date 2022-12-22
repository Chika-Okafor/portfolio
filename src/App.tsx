import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import { MenuContext } from "./contexts/MenuContext";
import { ThemeContext, Theme } from "./contexts/ThemeContext";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import NavMenu from "./components/navMenu/NavMenu";
import Footer from "./components/footer/Footer";

import "./App.scss";

const App = () => {
  const [menu, setMenu] = useState(false);
  const [theme, setTheme] = useState(Theme.Light);

  const toggleMenu = () => {
    menu ? setMenu(false) : setMenu(true);
  };

  return (
    <div className="App">
      <MenuContext.Provider value={{ menu, setMenu }}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Header toggleMenu={toggleMenu} />
          <main className="App-main">
            <Hero />
            <NavMenu />
          </main>
          <Footer />
        </ThemeContext.Provider>
      </MenuContext.Provider>
    </div>
  );
};

export default App;
