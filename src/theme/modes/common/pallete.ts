import { PaletteOptions } from "@mui/material/styles";
import { BLACK, DEFAULT_BLACK, DEFAULT_WHITE, WHITE } from "../../constants";

const commonPallete: PaletteOptions = {
  common: {
    black: DEFAULT_BLACK,
    white: DEFAULT_WHITE,
  }, // Partial<CommonColors>

  primary: {
    light: "rgba(47, 41, 99, 0.3)",
    main: "rgba(47, 41, 99, 0.7)",
    dark: "rgba(47, 41, 99, 1)",
    contrastText: WHITE,

    // light: "rgba(21, 50, 67, 0.3)",
    // main: "rgba(21, 50, 67, 0.7)",
    // dark: "rgba(21, 50, 67, 1)",
    // contrastText: BLACK,
  }, // PaletteColorOptions;

  secondary: {
    light: "rgba(242, 166, 34, 0.3)",
    main: "rgba(242, 166, 34, 0.7)",
    dark: "rgba(242, 166, 34, 1)",
    contrastText: BLACK,

    // light: "rgba(75, 80, 67, 0.3)",
    // main: "rgba(75, 80, 67, 0.7)",
    // dark: "rgba(75, 80, 67, 1)",
    // contrastText: BLACK,
  }, // PaletteColorOptions;

  error: {
    light: "rgba(255, 85, 85, 1)",
    main: "rgba(255, 85, 85, 1)",
    dark: "rgba(255, 85, 85, 1)",
    contrastText: BLACK,
  }, // PaletteColorOptions;

  warning: {
    light: "rgba(236, 120, 32, 1)",
    main: "rgba(236, 120, 32, 1)",
    dark: "rgba(236, 120, 32, 1)",
    contrastText: BLACK,
  }, // PaletteColorOptions;

  info: {
    light: "rgba(47, 120, 255, 1)",
    main: "rgba(47, 120, 255, 1)",
    dark: "rgba(47, 120, 255, 1)",
    contrastText: BLACK,
  }, // PaletteColorOptions;

  success: {
    light: "rgba(30, 156, 110, 1)",
    main: "rgba(30, 156, 110, 1)",
    dark: "rgba(30, 156, 110, 1)",
    contrastText: BLACK,
  }, // PaletteColorOptions;

  text: {
    primary: BLACK, // Primary text color: ;
    secondary: "rgba(0, 0, 0, 0.6)", // Secondary text color
    disabled: "rgba(0, 0, 0, 0.3)", // Disabled text color
  }, // Partial<TypeText>

  background: {
    default: DEFAULT_WHITE,
    paper: WHITE, // Background color for paper elements
  }, // Partial<TypeBackground>

  grey: {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#D5D5D5",
    A200: "#AAAAAA",
    A400: "#616161",
    A700: "#303030",
  }, // ColorPartial

  action: {
    active: "#2196F3",
    hover: "#BBDEFB",
    selected: "#BBDEFB",
    disabled: "rgba(0, 0, 0, 0.38)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    hoverOpacity: 0.08,
    selectedOpacity: 0.08,
    disabledOpacity: 0.38,
    focus: "#2196F3",
    focusOpacity: 0.12,
    activatedOpacity: 0.24,
  }, // Partial<TypeAction>

  getContrastText: (background: string) => {
    // Function to get contrast text color based on background color
    // You may adjust this function based on your design needs
    return BLACK;
  }, // (background: string) => string

  tonalOffset: 0.2, // Tonal offset for light theme - PaletteTonalOffset

  contrastThreshold: 3, // Minimum contrast ratio for light theme - number

  mode: "light", // PaletteMode

  divider: "#4CAF50", // string
};

export default commonPallete;
