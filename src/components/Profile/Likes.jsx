import React from "react";
import { useSelector } from "react-redux";
import { likeTweet, unlikeTweet } from "../../redux/action";
import { Button } from "@mui/material";
import { SlDislike, SlLike } from "react-icons/sl";

const Likes = () => {
  const tweets = useSelector((state) => state.tweets.tweets);

  const handleLike = (likes) => {
    if (likes && likes.id) {
      likeTweet(likes.id);
    }
  };

  const handleUnlike = (likes) => {
    if (likes && likes.id) {
      unlikeTweet(likes.id);
    }
  };

  return (
    <div>
      {tweets?.map((item, index) => {
        return (
          <div key={index}>
            {item.likes > 0 ? (
              <div>
                <p>{item.tweet}</p>
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
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Likes;
