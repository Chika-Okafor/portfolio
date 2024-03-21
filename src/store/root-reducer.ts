import { combineReducers } from "redux";
import { themeSlice } from "../theme/store/slice";

export const reducer = {
  [themeSlice.name]: themeSlice.reducer,
};

const combinedReducer = combineReducers(reducer);

const rootReducer: typeof combinedReducer = (state, action) => {
  return combinedReducer(state, action);
};

export default rootReducer;
