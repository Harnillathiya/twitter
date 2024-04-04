import { createSlice } from "@reduxjs/toolkit";

export const actionSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
  },
});

export const { addUser } = actionSlice.actions;

export default actionSlice.reducers;
