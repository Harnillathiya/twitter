export const ADD_TWEET = 'ADD_TWEET';
export const ADD_COMMENT = 'ADD_COMMENT'; 

export const addTweet = (tweet) => ({
  type: ADD_TWEET,
  payload: tweet,
});

export const addComment = (tweetId, comment) => ({
  type: ADD_COMMENT,
  payload: { tweetId, comment },
});