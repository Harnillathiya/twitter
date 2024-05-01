import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./index";
import { thunk } from "redux-thunk";

const store = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(thunk)
);

export default store;
