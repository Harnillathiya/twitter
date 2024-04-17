export const ADD_TWEET = "ADD_TWEET";
export const ADD_COMMENT = "ADD_COMMENT";

export const LIKE_TWEET = "LIKE_TWEET";
export const UNLIKE_TWEET = "UNLIKE_TWEET";

export const LIKE_COMMENT = "LIKE_COMMENT";
export const DISLIKE_COMMENT = "DISLIKE_COMMENT";

export const SHOW_TWEET = "SAVE_TWEET";

export const ADD_TO_HIGHLIGHT = "ADD_TO_HIGHLIGHT";

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

export const showTweet = (tweet) => ({
  type: SHOW_TWEET,
  payload: tweet,
});

export const addToHighlight = (tweetData) => ({
  type: ADD_TO_HIGHLIGHT,
  payload: tweetData,
});
