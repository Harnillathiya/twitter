import React from "react";
import CreatePost from "./CreatePost";
import Tweet from "./Tweet";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
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
  const tweets = useSelector((state) => state.tweets);

  const onSaveTweet = (payload) => {
    dispatch(addTweet(payload));
  };

  const onTweetLike = (id) => {
    dispatch(likeTweet(id));
  };

  const onTweetUnLike = (id) => {
    dispatch(unlikeTweet(id));
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
          tweets={tweets.tweets}
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
