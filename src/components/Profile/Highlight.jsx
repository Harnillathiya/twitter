import React from "react";
import { useSelector } from "react-redux";
import { SlLike, SlDislike } from "react-icons/sl";
import { Button } from "@mui/material";
import { likeTweet, unlikeTweet } from "../../redux/action";

const Highlight = () => {
  const tweets = useSelector((state) => state.tweets.tweets);
  const highLightsTweets = tweets?.filter((d) => d.isHighlight === true) || [];

  const getTimeAgo = (timestamp) => {
    const timeDifference = Date.now() - timestamp;
    const seconds = Math.floor(timeDifference / 1000);
    if (seconds < 0) {
      return `0 seconds ago`;
    } else if (seconds < 60) {
      return `${seconds} seconds ago`;
    } else if (seconds < 3600) {
      return `${Math.floor(seconds / 60)} minutes ago`;
    } else if (seconds < 86400) {
      return `${Math.floor(seconds / 3600)} hours ago`;
    } else {
      return `${Math.floor(seconds / 86400)} days ago`;
    }
  };

  const handleLike = (likes) => {
    console.log("likes", likes);
    if (likes && likes.id) {
      likeTweet(likes.id);
    }
  };

  const handleUnlike = (likes) => {
    console.log("likes", likes);
    if (likes && likes.id) {
      unlikeTweet(likes.id);
    }
  };

  return (
    <div>
      {highLightsTweets?.map((item, index) => {
        return (
          <div key={index}>
            <p>Harsh Dash {getTimeAgo(item?.timestamp)}</p>
            <p>{item?.tweet}</p>
            <div style={{ display: "flex" }}>
              <Button onClick={() => handleLike(item.likes)}>
                <SlLike size={"24px"} />
              </Button>
              <p>{item?.likes}</p>
              <Button onClick={() => handleUnlike(item.likes)}>
                <SlDislike size={"24px"} />
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Highlight;
