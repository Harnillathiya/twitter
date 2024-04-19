import React, { useState } from "react";
import twitterlogo from "../image/twitterlogo.png";
import { IoMdHome } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsSharp } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { TbPremiumRights } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";
import "../App.css";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineMonetizationOn } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { IoSettingsSharp } from "react-icons/io5";

const style = {
  position: "absolute",
  top: "40%",
  left: "12%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

const Leftsidebar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div style={{ position: "fixed", top: 0 }}>
        <div>
          <img width={"40px"} src={twitterlogo} alt="twitter-logo" />
        </div>
        <div className="main">
          <div className="leftmainbar">
            <div className="box">
              <IoMdHome size={"26"} />
              <Link to="/">
                <span>Home</span>
              </Link>
            </div>
          </div>
          <div className="leftmainbar">
            <div className="box">
              <CiSearch size={"26"} />
              <Link to="/explore">
                <span>Explore</span>
              </Link>
            </div>
          </div>
          <div className="leftmainbar">
            <div className="box">
              <IoNotificationsSharp size={"26"} />
              <Link to="/notifications">
                <span>Notifications</span>
              </Link>
            </div>
          </div>
          <div className="leftmainbar">
            <div className="box">
              <CiMail size={"26"} />
              <Link to="/massages">
                <span>Massages</span>
              </Link>
            </div>
          </div>
          <div className="leftmainbar">
            <div className="box">
              <TbPremiumRights size={"26"} />
              <Link to="/premium">
                <span>Premium</span>
              </Link>
            </div>
          </div>
          <div className="leftmainbar">
            <div className="box">
              <CgProfile size={"26"} />
              <Link to="/profile">
                <span>Profile</span>
              </Link>
            </div>
          </div>
          <div className="leftmainbar">
            <div className="box">
              <CiCircleMore size={"26"} />
              <Link to="/more">
                <Button onClick={handleOpen} className="more">
                  More
                </Button>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  slots={{ backdrop: Backdrop }}
                  slotProps={{
                    backdrop: {
                      timeout: 500,
                    },
                  }}
                >
                  <Fade in={open}>
                    <Box sx={style}>
                      <div className="modalopen-sidebar">
                        <FaXTwitter size={26} />
                        <Link className="premium">Premium</Link>
                      </div>
                      <div className="modalopen-sidebar">
                        <FaRegBookmark size={26} />
                        <Link className="premium">Bookmarks</Link>
                      </div>
                      <div className="modalopen-sidebar">
                        <FaUserGroup size={26} />
                        <Link className="premium">Communities</Link>
                      </div>
                      <div className="modalopen-sidebar">
                        <MdOutlineMonetizationOn size={26} />
                        <Link className="premium">Monetization</Link>
                      </div>
                      <div className="modalopen-sidebar">
                        <GoProjectRoadmap size={26} />
                        <Link className="premium">Pro</Link>
                      </div>
                      <div className="modalopen-sidebar">
                        <IoSettingsSharp size={26} />
                        <Link className="premium">Settings and privacy</Link>
                      </div>
                    </Box>
                  </Fade>
                </Modal>
              </Link>
            </div>
          </div>
          <div className="leftmainbar">
            <div className="box">
              <LuLogOut size={"26"} />
              <span>logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftsidebar;
