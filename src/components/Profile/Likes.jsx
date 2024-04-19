import React from "react";
import { useSelector } from "react-redux";

const Likes = () => {
  const tweets = useSelector((state) => state.tweets.tweets);
  console.log(tweets);

  return (

    <div>
    </div>
  )
};

export default Likes;
