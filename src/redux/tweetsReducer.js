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
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILED,
  FETCH_COMMENTS_START,
} from "./action";
import { LIKE_TWEET, UNLIKE_TWEET, ADD_COMMENT } from "../redux/action";

const initialState = {
  loading: false,
  tweets: [],
  comments: [],     
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
      const data = {
        ...state,
        tweets: state.tweets.map((tweet) => {
          if (tweet._id === action.payload.tweetId) {
            return {
              ...tweet,
              comments: tweet.comments.map((comment) =>
                comment._id === action.payload.commentId && comment.likes >= 0
                  ? { ...comment, likes: comment.likes + 1 }
                  : comment
              ),
            };
          }
          return tweet;
        }),
      };
      return data;

    case DISLIKE_COMMENT:
      const Data = {
        ...state,
        tweets: state.tweets.map((tweet) => {
          if (tweet._id === action.payload.tweetId) {
            return {
              ...tweet,
              comments: tweet.comments.map((comment) =>
                comment._id === action.payload.commentId && comment.likes > 0
                  ? { ...comment, likes: comment.likes - 1 }
                  : comment
              ),
            };
          }
          return tweet;
        }),
      };
      return Data;

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
        tweets: state.tweets.map((item) => {
          if (item.id === action.payload.tweetId) {
            return {
              ...item,
              isHighlight: true,
            };
          } else {
            return item;
          }
        }),
      };

    case DELETE_TO_HIGHLIGHT:
      return {
        ...state,
        tweets: state.tweets.map((item) => {
          if (item.id === action.payload.tweetId) {
            return {
              ...item,
              isHighlight: false,
            };
          } else {
            return item;
          }
        }),
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

    case FETCH_COMMENTS_START:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload, 
        error: null,
      };
    case FETCH_COMMENTS_FAILED:
      return {
        ...state,
        comments: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
