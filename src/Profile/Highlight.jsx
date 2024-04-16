import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_HIGHLIGHT } from "../redux/action";


const Highlight = () => {
  const dispatch = useDispatch();
  const tweetsSelector = useSelector((state) => state.tweets.tweets);

  // Dispatch action to add tweets to highlight on component mount
  useEffect(() => {
    // Dispatch action to add tweets to highlight section
    dispatch(ADD_TO_HIGHLIGHT(tweetsSelector));
  }, [dispatch, tweetsSelector]);

  const highlightSelector = useSelector((state) => state?.tweetPost?.tweetPost);
  console.log("highlightSelector", highlightSelector);
  
  return (
    <div>
      <h2>Highlights</h2>
      {highlightSelector?.map((tweet, index) => (
        <div key={index}>
          <p>{tweet}</p>
        </div>
      ))}
    </div>
  );
};

export default Highlight;
