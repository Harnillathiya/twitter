import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import "./Profile.css";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import Button from "@mui/material/Button";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import { profileCom } from "../StaticData";
import Posts from "../Profile/Posts";

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
    id: "like",
    text: "Like",
  },
];


const Profile = () => {
  const [selectedTab, setSelectedTab] = useState("posts");
  const selectedTabHandler = (id) => {
    setSelectedTab(id);
    console.log(id);
  };
  return (
    <div>
      <div className="profile-main-box">
        <div className="arrow-icon">
          <GoArrowLeft size={26} color="white" />
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
      <div className="avatar-second-box">
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
          {/* <div>
            <ul className="profile-header">
              <li className="profile-header-li">
                <Link to="/posts">Posts</Link>
              </li>
              <li className="profile-header-li">
                <Link to="/replies">Replies</Link>
              </li>
              <li className="profile-header-li">
                <Link to="/highlights">Highlights</Link>
              </li>
              <li className="profile-header-li">
                <Link to="/article">Article</Link>
              </li>
              <li className="profile-header-li">
                <Link to="/media">Media</Link>
              </li>
              <li className="profile-header-li">
                <Link to="/like">Like</Link>
              </li>
            </ul>
          </div> */}
          <div className="flex">
            {profileHeader.map((item, index) => {
              return (
                <div
                  className="flex-col"
                  key={index}
                  onClick={() => selectedTabHandler(item.id)}
                >
                  {item.text}
                </div>
              );
            })}
          </div>
          <div>
           <h3 style={{color: "white"}}>{profileCom[selectedTab]?.textOne}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
