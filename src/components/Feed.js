import React from 'react'
import CreatePost from './CreatePost'
// import './Feed.css'
import Tweet from "./Tweet";
import { useDispatch, useSelector } from "react-redux";
import { addTweet } from '../redux/action';


const Feed = () => {
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.tweets);

  const onSaveTweet = (payload) => {
    dispatch(addTweet(payload));
  }

  return (
    <div className='border border-gray-200'>
     <CreatePost onSaveTweet={onSaveTweet}/>
     <Tweet tweets={tweets.tweets}/>
    </div>
  )
}

export default Feed