import React from "react";
import { useSelector } from "react-redux";

const Highlight = () => {
  const selector = useSelector((state) => state);
  console.log("tweetPost",selector);

  // const getTimeAgo = (timestamp) => {
  //   const timeDifference = Date.now() - timestamp;
  //   const seconds = Math.floor(timeDifference / 1000);
  //   if (seconds < 0) {
  //     return `0 seconds ago`;
  //   } else if (seconds < 60) {
  //     return `${seconds} seconds ago`;
  //   } else if (seconds < 3600) {
  //     return `${Math.floor(seconds / 60)} minutes ago`;
  //   } else if (seconds < 86400) {
  //     return `${Math.floor(seconds / 3600)} hours ago`;
  //   } else {
  //     return `${Math.floor(seconds / 86400)} days ago`;
  //   }
  // };

  return (
    <div>
      {/* {selector?.tweets.map((item, index) => {
        return (
          <div key={index}>
            <p>Harsh Dash {getTimeAgo(selector.tweets[0].timestamp)}</p>
            <p>{item?.tweet}</p>
          </div>
        );
      })} */}
    </div>
  );
};

export default Highlight;
