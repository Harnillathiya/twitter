import React from "react";
import Leftsidebar from "./Leftsidebar";
import Rightsidebar from "./Rightsidebar";
import Feed from "./Feed";

const Home = () => {
  return (
    <div>
        <Leftsidebar/>
        <Feed/>
        <Rightsidebar/>
    </div>
  )
}

export default Home