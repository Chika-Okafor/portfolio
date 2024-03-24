import { Stack } from "@mui/material";
import { Footer } from "./modules/footer";
import { Header } from "./modules/header";
import ThemeProvider from "./theme/context/theme-provider";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Stack>
        <Header />
        <Footer />
      </Stack>
    </ThemeProvider>
  );
};

export default App;
