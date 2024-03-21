import { configureStore } from "@reduxjs/toolkit";
import reducers from "./root-reducer";

const createStore = () => {
  const store = configureStore({
    reducer: reducers,
  });

  return store;
};

export default createStore;
