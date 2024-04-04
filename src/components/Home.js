import React from "react";
import Leftsidebar from "./Leftsidebar";
import Rightsidebar from "./Rightsidebar";
import Feed from "./Feed";
import '../App.css';
import Container from '@mui/material/Container';

const Home = () => {
  return (
    <Container maxWidth="lg">
    <div className='home'>
        <Leftsidebar/>
        <Feed/>
        <Rightsidebar/>
    </div>
    </Container>
  )
}

export default Home