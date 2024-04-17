import React from "react";
import Container from '@mui/material/Container';
import { Outlet } from "react-router-dom";
import Leftsidebar from "../components/Leftsidebar";
import "./styles.css";
import Rightsidebar from "../components/Rightsidebar";

const MainLayout = () => {
  return (

    <Container maxWidth="lg">
      <div className="main-layout">
        <Leftsidebar />
        <Outlet />
        <Rightsidebar />
      </div>
    </Container>
  );
};

export default MainLayout;
