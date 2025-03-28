import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticated: false },
  reducers: {
    login: (state) => {
      localStorage.setItem("auth", "true");
      state.isAuthenticated = true;
      return state
    },
    logout: (state) => {
      localStorage.removeItem("auth");
      state.isAuthenticated = false;
      return state
    },
    checkAuthStatus: (state) => {
      state.isAuthenticated = localStorage.getItem("auth") === "true";
    },
  },
});

export const { login, logout, checkAuthStatus } = authSlice.actions;
export default authSlice.reducer;
