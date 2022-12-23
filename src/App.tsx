//DEPENDENCY IMPORTS
import { useState } from "react";

//CONTEXT IMPORTS
import { MenuContext } from "./contexts/MenuContext";
import { ThemeContext, Theme } from "./contexts/ThemeContext";

//COMPONENT IMPORTS
import Header from "./components/header/Header";
import PageContentManager from "./pages/PageContentManager";
import NavMenu from "./components/navMenu/NavMenu";
import Footer from "./components/footer/Footer";

const App = () => {
  //CREATE CONTEXT STATES
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(Theme.Light);

  //TOGGLE SLIDING MENU STATE
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
