import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";
import Leftsidebar from "../components/Leftsidebar";
import "./styles.css";
import Rightsidebar from "../components/Rightsidebar";
import Login from "../components/Login";

const MainLayout = () => {

  const [user, setUser] = useState();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setUser(true);
    } else {
      fetch("http://localhost:8000/api/token", {
        headers: {
          Authorization: token,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("not a user");
          }
          return response.json();
        })
        .then((data) => {
          setUser(false)
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    }
  }, []);
  console.log("/////////////",user);
  return user ? <Login /> :

    <Container maxWidth="lg">
      <div className="main-layout">
        <Leftsidebar />
        <Outlet />
        <Rightsidebar />
      </div>
    </Container> ;
  
};

export default MainLayout;
