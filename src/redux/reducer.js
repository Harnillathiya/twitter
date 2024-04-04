import { combineReducers } from 'redux';

import { ADD_TWEET } from './action';

const initialState = {
  tweets: [],
};

const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TWEET:
      return {
        ...state,
        tweets: [...state.tweets, action.payload],
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
    tweets: tweetsReducer
});