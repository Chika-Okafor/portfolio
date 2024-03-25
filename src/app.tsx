import { Stack, CssBaseline } from "@mui/material";
import { Footer } from "./modules/footer";
import { Header } from "./modules/header";
import ThemeProvider from "./theme/context/theme-provider";
import { Contact } from "./modules/contact";

import styles from "./app.module.scss";

const App = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Stack className={styles.app}>
        <Header />
        <Contact />
        <Footer />
      </Stack>
    </ThemeProvider>
  );
};

export default App;
