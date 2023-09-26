import { createSlice } from "@reduxjs/toolkit";

export interface themeState {
  theme: "dark" | "light";
}
const storedTheme = localStorage.getItem("theme") || "light";

const initialState: themeState = {
  theme: storedTheme === "dark" ? storedTheme : "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme);
      document.querySelector("html")?.setAttribute("data-theme", state.theme);
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
