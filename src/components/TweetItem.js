import React from 'react';

import { SlLike, SlDislike  } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";


const TweetItem = ({ tweet, likeTweet, unlikeTweet, setCommentText }) => {
    console.log(tweet)
    const handleLike = () => {
        console.log("called", tweet.id)
        likeTweet(tweet.id); 
    };

    const handleUnlike = () => {
        console.log("called", tweet.id)
        unlikeTweet(tweet.id); 
    };
    const handleComment = () => {
        setCommentText(tweet.id); 
    };

    return (
        <div className="flex justify-between p-3 items-center" key={tweet.id}>
            <div className="flex items-center">
                <button onClick={handleLike}>
                    <SlLike size={"24px"} />
                </button>
                <div>{tweet.likes}</div>
                <button onClick={handleUnlike}>
                    <SlDislike size={"24px"}/>
                </button>
                <button onClick={handleComment}>
                    <FaRegComment size={"24px"} />
                </button>
            </div>
        </div>
    );
};

export default TweetItem;
