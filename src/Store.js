import { configureStore } from "@reduxjs/toolkit";
import { actionSlice } from "./Action/ActionSlice";

export const store = configureStore({
  reducer: {
    users: actionSlice,
  },
});
