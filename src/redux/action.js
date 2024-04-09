export const ADD_TWEET = 'ADD_TWEET';
export const ADD_COMMENT = 'ADD_COMMENT'; 

export const LIKE_TWEET = 'LIKE_TWEET';
export const UNLIKE_TWEET = 'UNLIKE_TWEET';

export const addTweet = (tweet) => ({
  type: ADD_TWEET,
  payload: tweet,
});

export const addComment = (tweetId, comment) => ({
  type: ADD_COMMENT,
  payload: { tweetId, comment },
});

export const likeTweet = (index) => ({
    type: LIKE_TWEET,
    payload: index
});

export const unlikeTweet = (index) => ({
    type: UNLIKE_TWEET,
    payload: index
});
