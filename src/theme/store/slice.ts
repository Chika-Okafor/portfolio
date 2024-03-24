import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_THEME_STATE, THEME_SLICE_NAME } from "./constants";

export const themeSlice = createSlice({
  name: THEME_SLICE_NAME,
  initialState: DEFAULT_THEME_STATE,
  reducers: {
    setLightTheme: (state) => {
      state.activeTheme = "light";
    },
    setDarkTheme: (state) => {
      state.activeTheme = "dark";
    },
    toggleTheme: (state) => {
      state.activeTheme = state.activeTheme === "light" ? "dark" : "light";
    },
  },
});
