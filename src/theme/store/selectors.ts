import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/types";
import { THEME_SLICE_NAME } from "./constants";

const sliceState = (state: Pick<RootState, typeof THEME_SLICE_NAME>) =>
  state[THEME_SLICE_NAME];

export const getTheme = createSelector(
  sliceState,
  (state) => state.activeTheme
);
