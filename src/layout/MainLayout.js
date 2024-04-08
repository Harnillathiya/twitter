import React from "react";
import { Outlet } from "react-router-dom";
import Leftsidebar from "../components/Leftsidebar";
import "./styles.css";
import Rightsidebar from "../components/Rightsidebar";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Leftsidebar />
      <Outlet />
      <Rightsidebar />
    </div>
  );
};

export default MainLayout;
