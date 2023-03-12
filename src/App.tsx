import { useState } from "react";

import { MenuContext } from "./contexts/MenuContext";
import { ThemeContext, Theme } from "./contexts/ThemeContext";

import Header from "./components/header/Header";
import PageContentManager from "./pages/page-creator/PageContentManager";
import NavMenu from "./components/navMenu/NavMenu";
import Footer from "./components/footer/Footer";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(Theme.Light);

  const toggleMenu = () => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className="app">
          <Header toggleMenu={toggleMenu} />
          <main className="app-main">
            <PageContentManager />
            <NavMenu toggleMenu={toggleMenu} />
          </main>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </MenuContext.Provider>
  );
};

export default App;
