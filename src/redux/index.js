import { combineReducers } from "redux";
import { tweetsReducer } from "./tweetsReducer";

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
});
