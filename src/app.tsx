import { Stack, CssBaseline } from "@mui/material";
import ThemeProvider from "./theme/context/theme-provider";
import { Footer } from "./modules/footer";
import { Header } from "./modules/header";
import { Contact } from "./modules/contact";
import { Hero } from "./modules/hero";
import { About } from "./modules/about";

import styles from "./app.module.scss";

const App = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Stack className={styles.app}>
        <Header />
        <Hero />
        <About />
        <Contact />
        <Footer />
      </Stack>
    </ThemeProvider>
  );
};

export default App;
