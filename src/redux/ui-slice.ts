import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isMenuOpen: false,
    isDarkTheme: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    toggleDarkTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

// Action creators are generated for each case reducer function
export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
