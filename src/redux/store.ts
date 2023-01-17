import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice";
import documentReducer from "./document-slice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    docs: documentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
