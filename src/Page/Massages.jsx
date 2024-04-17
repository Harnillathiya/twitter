import React from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import "./Massages.css";
import Button from "@mui/material/Button";

const Massages = () => {
  return (
    <div>
      <div className="massages-flex">
        <div>
          <h1 className="messages">Messages</h1>
        </div>
        <div className="settingemailicon">
          <IoSettingsSharp size={20} />
          <MdMarkEmailRead size={20} />
        </div>
      </div>
      <div>
        <p className="welcome">Welcome to your inbox!</p>
        <p className="drop">
          Drop a line, share posts and more with private conversations between
          you and others on X.{" "}
        </p>
        <div className="writeamessage-btn">
          <Button variant="contained" className="writeamessage">
            Write a Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Massages
