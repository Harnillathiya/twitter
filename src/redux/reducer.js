import { combineReducers } from 'redux';

import { ADD_TWEET } from './action';
import { ADD_COMMENT } from './action';

const initialState = {
  tweets: [],
};

const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TWEET:
      return {
        ...state,
        tweets: [action.payload, ...state.tweets],
      };
          case ADD_COMMENT:
      const { tweetId, comment } = action.payload;
      console.log("New Comment:", comment);
      return {
        ...state,
        tweets: state.tweets.map(tweet => {
          if (tweet.id === tweetId) {
            return {
              ...tweet,
              comments: [...(tweet.comments || []), comment],
            };
          }
          return tweet;
        }),
      };

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
    tweets: tweetsReducer
});