export interface CustomPaletteOptions {
  primary?: string;
  secondary?: string;
  error?: string;
  warning?: string;
  info?: string;
  success?: string;
  background?: {
    default: string;
    paper: string;
  };
  text?: {
    primary: string;
    secondary: string;
    disabled: string;
    hint: string;
  };
}
