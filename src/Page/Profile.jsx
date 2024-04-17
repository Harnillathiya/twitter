import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import "./Profile.css";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import Button from "@mui/material/Button";
import { SlCalender } from "react-icons/sl";
import { profileCom } from "../StaticData";

const profileHeader = [
  {
    id: "posts",
    text: "Posts",
  },
  {
    id: "replies",
    text: "Replies",
  },
  {
    id: "highlights",
    text: "Highlights",
  },
  {
    id: "articles",
    text: "Articles",
  },
  {
    id: "media",
    text: "Media",
  },
  {
    id: "likes",
    text: "Likes",
  },
];

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState("posts");
  const selectedTabHandler = (id) => {
    setSelectedTab(id);
    console.log(id);
  };
  return (
    <div className="profile-main">
      <div className="profile-main-box">
        <div className="arrow-icon">
          <GoArrowLeft size={26} color="black" />
        </div>
        <div className="name-post-text">
          <p className="name-text">Rahul Dholakiya</p>
          <p className="post-text">0 Posts</p>
        </div>
      </div>
      <div className="avatar-box">
        <Avatar
          size={130}
          icon={<UserOutlined />}
          className="avatar-position"
        />
      </div>
      <div>
        <div className="main-profile-button">
          <Button variant="outlined" className="profile-button">
            Set up profile
          </Button>
        </div>
        <div>
          <p className="profile-rahul-text">Rahul Dholakiya</p>
          <p className="profile-username-text">@rahul_6849</p>
          <div className="date-joined-flex">
            <div className="date-joined-calender">
              <SlCalender />
            </div>
            <div>
              <p className="date-joined-text">Joined April 2024</p>
            </div>
          </div>
          <div className="following-flex">
            <p className="following">
              <span className="one">1</span>Following
            </p>
            <p className="followers">
              <span className="one">0</span>Followers
            </p>
          </div>
          <div className="profile-header">
            {profileHeader.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => selectedTabHandler(item.id)}
                  className="profileheader-text"
                >
                  {item.text}
                </div>
              );
            })}
          </div>
          <div className="profilecom-main">
            <p className="profilecom-textone">
              {profileCom[selectedTab]?.textOne}
            </p>
            <p className="profilecom-texttwo">
              {profileCom[selectedTab]?.textTwo}
            </p>
            <Button variant="outlined" className="profilecom-btn">
              {profileCom[selectedTab]?.btn}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;