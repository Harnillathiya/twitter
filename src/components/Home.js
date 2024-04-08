import React from "react";
// import Feed from "./Feed";
import "../App.css";
import Rightsidebar from "./Rightsidebar";
import Leftsidebar from "./Leftsidebar";
import Feed from "./Feed";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Feed />
      </Container>
    </>
  );
};

export default Home;
