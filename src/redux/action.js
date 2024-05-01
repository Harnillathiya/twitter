export const ADD_TWEET = "ADD_TWEET";
export const ADD_COMMENT = "ADD_COMMENT";

export const LIKE_TWEET = "LIKE_TWEET";
export const UNLIKE_TWEET = "UNLIKE_TWEET";

export const LIKE_COMMENT = "LIKE_COMMENT";
export const DISLIKE_COMMENT = "DISLIKE_COMMENT";

export const SHOW_TWEET = "SAVE_TWEET";

export const ADD_TO_HIGHLIGHT = "ADD_TO_HIGHLIGHT";
export const DELETE_TO_HIGHLIGHT = "DELETE_TO_HIGHLIGHT";

export const TWEET_FETCH_START = "TWEET_FETCH_START";
export const TWEET_FETCH_SUCCESS = "TWEET_FETCH_SUCCESS";
export const TWEET_FETCH_FAILED = "TWEET_FETCH_FAILED";

export const FETCH_COMMENTS_START = "FETCH_COMMENTS_START";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_COMMENTS_FAILED = "FETCH_COMMENTS_FAILED";

export const addTweet = (tweet) => ({
  type: ADD_TWEET,
  payload: tweet,
});

export const addComment = (tweetId, comment) => ({
  type: ADD_COMMENT,
  payload: { tweetId, comment },
});
export const likeComment = (tweetId, commentId) => ({
  type: LIKE_COMMENT,
  payload: { tweetId, commentId },
});

export const dislikeComment = (tweetId, commentId) => ({
  type: DISLIKE_COMMENT,
  payload: { tweetId, commentId },
});

export const likeTweet = (index) => ({
  type: LIKE_TWEET,
  payload: index,
});

export const unlikeTweet = (index) => ({
  type: UNLIKE_TWEET,
  payload: index,
});

export const addToHighlight = (payload) => ({
  type: ADD_TO_HIGHLIGHT,
  payload: payload,
});

export const deleteToHighlight = (payload) => ({
  type: DELETE_TO_HIGHLIGHT,
  payload: payload,
});

export const tweetFetchStart = (data) => ({
  type: TWEET_FETCH_START,
  payload: data,
});

export const tweetFetchSuccess = (data) => ({
  type: TWEET_FETCH_SUCCESS,
  payload: data,
});

export const tweetFetchFailed = (data) => ({
  type: TWEET_FETCH_FAILED,
  payload: data,
});

export const fetchCommentsStart = (comment) => ({
  type: FETCH_COMMENTS_START,
  payload: comment,
});

export const fetchCommentsSuccess = (comments) => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: comments,
});

export const fetchCommentsFailed = (error) => ({
  type: FETCH_COMMENTS_FAILED,
  payload: error,
});
