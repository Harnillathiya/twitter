import React from "react";
import Profile from "../Page/Profile";
import Button from "@mui/material/Button";

const Posts = () => {
  return (
    <div>
      <div className="post-box">
        <Profile />
        <div>
          <p className="highlight">
            Highlight on your
          </p>
          <p>Profile</p>
          <p className="subscribed">
            You must be subscribed to Premium to highlight 
          </p>
          <p>posts on your profile</p>
          <div className="subscribe-btn">
            <Button variant="outlined">Subscribe to Preminum</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
