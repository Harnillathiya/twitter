import React from "react";
import Leftsidebar from "./Leftsidebar";
import Rightsidebar from "./Rightsidebar";
import Feed from "./Feed";
import '../App.css';

const Home = () => {
  return (
    <div className='home'>
        <Leftsidebar/>
        <Feed/>
        <Rightsidebar/>
    </div>
  )
}

export default Home