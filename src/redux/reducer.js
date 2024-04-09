import { combineReducers } from 'redux';

import { ADD_TWEET } from './action';
import { LIKE_TWEET, UNLIKE_TWEET, ADD_COMMENT } from '../redux/action';
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
    case LIKE_TWEET:
      return {
          ...state,
          tweets: state.tweets.map((tweet) =>
              tweet.id === action.payload ? { ...tweet, likes: tweet.likes + 1 } : tweet
          )
      };
    case UNLIKE_TWEET:
      return {
          ...state,
          tweets: state.tweets.map((tweet) =>
              tweet.id === action.payload ? { ...tweet, likes: tweet.likes - 1 } : tweet
          )
          
      };
      case ADD_COMMENT:
      return {
        ...state,
        tweets: state.tweets.map((tweet) =>
          tweet.id === action.payload.tweetId
            ? { ...tweet, comments: [...(tweet.comments || []), action.payload.comment] } 
            : tweet
        ),
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  tweets: tweetsReducer
});