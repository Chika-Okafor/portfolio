import { createTheme } from "@mui/material/styles";
import lightThemePalette from "./pallete";
import fontFamily from "../common/typography";
import components from "../common/components";

const light = createTheme({
  palette: lightThemePalette,
  typography: { fontFamily },
  components,
});

export default light;
