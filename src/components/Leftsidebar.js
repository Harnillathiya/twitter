import React from 'react'
import twitterlogo from '../image/twitterlogo.png'
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
// import Explore from '../Page/Explore';

const Leftsidebar = () => {
    return (
        <div className='main-menu-left'>
            <div>
                <div>
                    <img width={"40px"} src={twitterlogo} alt="twitter-logo" />
                </div>
                <div className='main'>
                    <div className='leftmainbar'>
                        <div className='box'>
                            <IoMdHome size={"26"} />
                            <span>Home</span>
                        </div>
                    </div>
                    <div className='leftmainbar'>
                        <div className='box'>
                            <CiSearch size={"26"} />
                            <Link to="/exlore"> <span>Explore</span></Link>
                        </div>
                    </div>
                    <div className='leftmainbar'>
                        <div className='box'>
                            <IoNotificationsSharp size={"26"} />
                            <span>Notifications</span>
                        </div>
                    </div>
                    <div className='leftmainbar'>
                        <div className='box'>
                            <CiMail size={"26"} />
                            <span>Massages</span>
                        </div>
                    </div>
                    <div className='leftmainbar'>
                        <div className='box'>
                            <TbPremiumRights size={"26"} />
                            <span>Premium</span>
                        </div>
                    </div>
                    <div className='leftmainbar'>
                        <div className='box'>
                            <CgProfile size={"26"} />
                            <span>Profile</span>
                        </div>
                    </div>
                    <div className='leftmainbar'>
                        <div className='box'>
                            <CiCircleMore size={"26"} />
                            <span>More</span>
                        </div>
                    </div>
                    <div className='leftmainbar'>
                        <div className='box'>
                            <LuLogOut size={"26"} />
                            <span>logout</span>
                        </div>
                    </div>
                    <div className='leftmainbar'>
                        <button className='postbutton'>post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leftsidebar
