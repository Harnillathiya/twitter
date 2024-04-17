import { ADD_TO_HIGHLIGHT } from "./action";

const initialState = {
  highlights: [],
};

export const highlightReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_HIGHLIGHT:
      console.log(action.payload);
      return {
        ...state,
        highlights: [action.payload, ...state.tweetPost],
      };
    default:
      return state;
  }
};
