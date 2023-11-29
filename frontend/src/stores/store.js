import { configureStore } from "@reduxjs/toolkit";
import { profileSlice } from "./slices/profile";

export const store = configureStore({
  reducer: {
    profile: profileSlice,
  },
});
