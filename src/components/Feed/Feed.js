import React, { useEffect } from "react";
import CreatePost from "./CreatePost";
import Tweet from "./Tweet";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  tweetFetchStart,
  TWEET_FETCH_SUCCESS,
  TWEET_FETCH_FAILED,
} from "../../redux/action";
import {
  addTweet,
  likeTweet,
  unlikeTweet,
  addComment,
  likeComment,
  dislikeComment,
} from "../../redux/action";

const Feed = () => {
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.tweets.tweets) || [];

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8000/api/showTweet");
        const data = await response.json();
        dispatch({ type: TWEET_FETCH_SUCCESS, payload: data.data });
        console.log(data, "data comment");
      } catch (err) {
        console.error(err);
        dispatch({ type: TWEET_FETCH_FAILED, payload: err.message });
      }
    }
    dispatch(tweetFetchStart());
    fetchData();
  }, [dispatch]);

  const onSaveTweet = (payload) => {
    dispatch(addTweet(payload));
  };

  const onTweetLike = (_id) => {
    dispatch(likeTweet(_id));
  };

  const onTweetUnLike = (_id) => {
    dispatch(unlikeTweet(_id));
  };

  const onAddComment = (tweetId, comment) => {
    dispatch(addComment(tweetId, comment));
  };

  const onLikeComment = (tweetId, commentId) => {
    dispatch(likeComment(tweetId, commentId));
  };

  const onDislikeComment = (tweetId, commentId) => {
    dispatch(dislikeComment(tweetId, commentId));
  };

  return (
    <Container maxWidth="sm">
      <div className="border border-gray-200">
        <CreatePost onSaveTweet={onSaveTweet} />
        <Tweet
          tweets={tweets}
          onTweetLike={onTweetLike}
          onTweetUnLike={onTweetUnLike}
          onAddComment={onAddComment}
          onLikeComment={onLikeComment}
          onDislikeComment={onDislikeComment}
        />
      </div>
    </Container>
  );
};

export default Feed;
