import React from "react";
import twitterlogo from "../image/twitterlogo.png";
import { IoMdHome } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsSharp } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { TbPremiumRights } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
import { LuLogOut } from "react-icons/lu";
import { Link } from 'react-router-dom';


import '../App.css';

const Leftsidebar = () => {
  return (
    <div>
      <div>
        <div>
          <img width={"40px"} src={twitterlogo} alt="twitter-logo" />
        </div>
        <div className="main">
          <div className="leftmainbar">
            <div className="box">
              <IoMdHome size={"26"} />
              <Link to="/">
                <span>Home</span>
              </Link>
            </div>
          </div>
          <div className="leftmainbar">
            <div className="box">
              <CiSearch size={"26"} />
              <Link to="/explore">
                <span>Explore</span>
              </Link>
            </div>
          </div>
          <div className="leftmainbar">
            <div className="box">
              <IoNotificationsSharp size={"26"} />
              <Link to="/notifications">
                <span>Notifications</span>
              </Link>
            </div>
          </div>
          <div className="leftmainbar">
            <div className="box">
              <CiMail size={"26"} />
              <Link to="/massages">
                <span>Massages</span>
              </Link>
            </div>
          </div>
          <div className="leftmainbar">
            <div className="box">
              <TbPremiumRights size={"26"} />
              <Link to="/premium">
                <span>Premium</span>
              </Link>
            </div>
          </div>
          <div className="leftmainbar">
            <div className="box">
              <CgProfile size={"26"} />
              <Link to="/profile">
                <span>Profile</span>
              </Link>
            </div>
          </div>
          <div className="leftmainbar">
            <div className="box">
              <CiCircleMore size={"26"} />
              <Link to="/more">
                <span>More</span>
              </Link>
            </div>
          </div>
          <div className="leftmainbar">
            <div className="box">
              <LuLogOut size={"26"} />
              <span>logout</span>
            </div>
          </div>
          {/* <div className="leftmainbar">
            <button className="postbutton">post</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Leftsidebar;
