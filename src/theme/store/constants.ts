export const THEME_SLICE_NAME = "theme" as const;

export const DEFAULT_THEME_STATE = {
  activeTheme: "light",
  themes: ["light", "dark"],
  optimisticUpdate: undefined,
};
