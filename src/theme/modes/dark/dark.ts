import { createTheme } from "@mui/material/styles";
import darkThemePalette from "./pallete";
import fontFamily from "../common/typography";
import components from "../common/components";

const dark = createTheme({
  palette: darkThemePalette,
  typography: { fontFamily },
  components,
});

export default dark;
