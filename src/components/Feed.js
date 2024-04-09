import React from 'react'
import CreatePost from './CreatePost'
import Tweet from "./Tweet";
import { useDispatch, useSelector } from "react-redux";
import { addTweet, likeTweet, unlikeTweet, addComment } from '../redux/action';


const Feed = () => {
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.tweets);

  const onSaveTweet = (payload) => {
    dispatch(addTweet(payload));
  }

  const onTweetLike = (id) => {
    // console.log(id)
    dispatch(likeTweet(id))
  }

  const onTweetUnLike = (id) => {
    dispatch(unlikeTweet(id))
  }
  const onAddComment = (id) => {
    dispatch(addComment(id)); 
  };

  return (
    <div className='border border-gray-200'>
      <CreatePost onSaveTweet={onSaveTweet} />
      <Tweet
        tweets={tweets.tweets}
        onTweetLike={onTweetLike}
        onTweetUnLike={onTweetUnLike}
        onAddComment={onAddComment}
      />
    </div>
  )
}

export default Feed