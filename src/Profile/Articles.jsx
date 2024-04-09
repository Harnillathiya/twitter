import React from "react";
import Profile from "../Page/Profile";
import Button from "@mui/material/Button";

const Articles = () => {
  return (
    <div>
      <div className="post-box">
        <Profile />
        <div>
          <p className="highlight">Highlight on your</p>
          <p className="profile">Articles</p>
          <p className="subscribed">
            You must be subscribed to Premium to highlight
          </p>
          <p className="post-profile">posts on your profile</p>
          <div className="subscribe-btn">
            <Button variant="outlined" className="sub-to-premium">
              Subscribe to Premium
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
