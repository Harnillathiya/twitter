import { combineReducers } from 'redux';

import { ADD_TWEET, LIKE_COMMENT, DISLIKE_COMMENT } from './action';
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
      console.log(UNLIKE_TWEET);
      return {
        ...state,
    tweets: state.tweets.map((tweet) =>
      tweet.id === action.payload && tweet.likes > 0 ? { ...tweet, likes: tweet.likes - 1 } : tweet
    )
  };
    case ADD_COMMENT:
      const { tweetId, comment } = action.payload;
      console.log(tweetId);
      const updatedTweets = state.tweets.map((tweet) =>
        tweet.id === tweetId
          ? {
            ...tweet,
            comments: [comment, ...(tweet.comments || [])],
            commentsCount: (tweet.commentsCount || 0) + 1,
          }
          : tweet
      );
      return {
        ...state,
        tweets: updatedTweets,
      };
    case LIKE_COMMENT:
      console.log("comment Id", action.payload.commentId);
      console.log("tweetId", action.payload.tweetId);
      const data =
      {
        ...state,
    tweets: state.tweets.map((tweet) => {
      if (tweet.id === action.payload.tweetId) {
        return {
          ...tweet,
          comments: tweet.comments.map((comment) =>
            comment.id === action.payload.commentId && comment.likes >= 0
              ? { ...comment, likes: comment.likes + 1 }
              : comment
          )
        };
      }
          return tweet;
        })

      };
      // console.log(data, ".........");
      return data
    case DISLIKE_COMMENT:
      console.log("comment Id", action.payload.commentId);
      console.log("tweetId", action.payload.tweetId);
      const Data = {
        ...state,
        tweets: state.tweets.map((tweet) => {
          if (tweet.id === action.payload.tweetId) {
            return {
              ...tweet,
              comments: tweet.comments.map((comment) =>
                comment.id === action.payload.commentId && comment.likes > 0
                  ? { ...comment, likes: comment.likes - 1 }
                  : comment
              )
            };
          }
          return tweet;
        })
      };
      // console.log(Data, ".........");
      return Data


    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  tweets: tweetsReducer
});
