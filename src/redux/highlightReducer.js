import { combineReducers } from "redux";
import { ADD_TO_HIGHLIGHT } from "./action";

const initialState = {
  tweetPost: [],
};

const highlightReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_HIGHLIGHT:
      console.log(action.payload);
      return {
        ...state,
        tweetPost: [action.payload, ...state.tweetPost],
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  tweetPost: highlightReducer,
});
