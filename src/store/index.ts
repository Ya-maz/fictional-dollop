import { combineReducers, configureStore } from "@reduxjs/toolkit";

import reducers from "./reducers";

const rootReducer = combineReducers(reducers);

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
  });
};
const store = setupStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
