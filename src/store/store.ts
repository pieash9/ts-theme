import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
import toggleDarkMode from "./slice/darkModeSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    theme: toggleDarkMode,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
