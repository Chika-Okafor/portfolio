import rootReducer from "./root-reducer";
import createStore from "./store";

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof createStore>["dispatch"];
export type AppGetState = () => RootState;
