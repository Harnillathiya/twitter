import React from "react";
// import Feed from "./Feed";
import "../App.css";
import Feed from "../components/Feed";
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
