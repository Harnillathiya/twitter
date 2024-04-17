import { combineReducers } from "redux";
import { tweetsReducer } from "./tweetsReducer";
import { highlightReducer } from "./highlightReducer";

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
  highlights: highlightReducer,
});
