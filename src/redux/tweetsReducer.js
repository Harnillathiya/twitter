import {
  ADD_TWEET,
  LIKE_COMMENT,
  DISLIKE_COMMENT,
  SHOW_TWEET,
  ADD_TO_HIGHLIGHT,
  DELETE_TO_HIGHLIGHT,
  TWEET_FETCH_START,
  TWEET_FETCH_SUCCESS,
  TWEET_FETCH_FAILED,
} from "./action";
import { LIKE_TWEET, UNLIKE_TWEET, ADD_COMMENT } from "../redux/action";

const initialState = {
  loading: false,
  tweets: [],
  error: null,
};

export const tweetsReducer = (state = initialState, action) => {
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
          tweet._id === action.payload
            ? { ...tweet, likes: tweet.likes + 1 }
            : tweet
        ),
      };

    case UNLIKE_TWEET:
      return {
        ...state,
        tweets: state.tweets.map((tweet) =>
          tweet._id === action.payload && tweet.likes > 0
            ? { ...tweet, likes: tweet.likes - 1 }
            : tweet
        ),
      };

    case ADD_COMMENT:
      const { tweetId, comment } = action.payload;
      const updatedTweets = state.tweets.map((tweet) =>
        tweet._id === tweetId
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
      return {
        ...state,
        tweets: state.tweets.map((tweet) =>
          tweet._id === action.payload.tweetId
            ? {
              ...tweet,
              comments: tweet.comments.map((comment) =>
                comment._id === action.payload.commentId
                  ? { ...comment, likes: comment.likes + 1 }
                  : comment
              ),
            }
            : tweet
        ),
      };

    case DISLIKE_COMMENT:
      return {
        ...state,
        tweets: state.tweets.map((tweet) =>
          tweet._id === action.payload.tweetId
            ? {
              ...tweet,
              comments: tweet.comments.map((comment) =>
                comment._id === action.payload.commentId && comment.likes > 0
                  ? { ...comment, likes: comment.likes - 1 }
                  : comment
              ),
            }
            : tweet
        ),
      };

    case SHOW_TWEET:
      if (tweetId === action.payload.tweetId) {
        return {
          ...state,
          tweets: [action.payload, ...state.tweets],
        };
      }
      return state;

      case ADD_TO_HIGHLIGHT:
        return {
          ...state,
          tweets: state.tweets.map((tweet) =>
            tweet._id === action.payload ? { ...tweet, isHighlight: true } : tweet
          ),
        };
  
      case DELETE_TO_HIGHLIGHT:
        return {
          ...state,
          tweets: state.tweets.map((tweet) =>
            tweet._id === action.payload ? { ...tweet, isHighlight: false } : tweet
          ),
        };

    case TWEET_FETCH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case TWEET_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        tweets: [...action.payload],
      };

    case TWEET_FETCH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
