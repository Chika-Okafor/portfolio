import { PaletteOptions } from "@mui/material/styles";
import commonPallete from "../common/pallete";
import { BLACK, DEFAULT_BLACK, WHITE } from "../../constants";

const darkThemePalette: PaletteOptions = {
  ...commonPallete,
  mode: "dark",
  // primary: {
  //   main: "#1976D2",
  //   contrastText: "#fff",
  // },
  // secondary: {
  //   main: "#FF4081",
  //   contrastText: "#fff",
  // },
  text: {
    primary: WHITE,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.3)",
  }, // Partial<TypeText>

  background: {
    default: DEFAULT_BLACK,
    paper: BLACK, // Background color for paper elements
  }, // Partial<TypeBackground>
};

export default darkThemePalette;
