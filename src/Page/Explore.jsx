import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MdCancel } from "react-icons/md";
import Checkbox from "@mui/material/Checkbox";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 550,
  bgcolor: "#000000",
  boxShadow: 24,
  color: "#FFFFFF",
};

const Explore = () => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(true);
  const [showExploreLocations, setShowExploreLocations] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked) {
      setShowExploreLocations(false);
    } else {
      setShowExploreLocations(true);
    }
  };

  const handleSettingClose = () => {
    setOpen(false);
  };

  return (
    <div className="searchbar-fix bg-white border-line">
      <div className="searchbar">
        <div className="flex items-center p-3 bg-gray-100 rounded-full outline-none searchbar-color">
          <CiSearch />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none px-4"
          />
        </div>
        <div className="setting-icon">
          <IoSettingsSharp onClick={handleOpen} className="setting-icon" />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} borderRadius={5}>
              <div>
                <div className="explore-setting">
                  <div className="cancel-icon">
                    <MdCancel
                      size={25}
                      onClick={handleSettingClose}
                      cursor="pointer"
                    />
                  </div>
                  <div>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                      className="text-explore"
                    >
                      Explore settings
                    </Typography>
                  </div>
                </div>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  className="text-location"
                  fontSize={25}
                  fontWeight={800}
                >
                  Location
                </Typography>
                <div className="checkbox-flex">
                  <div>
                    <Typography
                      id="modal-modal-description"
                      sx={{ mt: 2 }}
                      className="text-location"
                    >
                      Show content in this location
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      className="text-location"
                      color={"InactiveCaptionText"}
                    >
                      When this is on, you’ll see what’s happening around you
                      right now.
                    </Typography>
                  </div>
                  <div>
                    <Checkbox
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  </div>
                </div>
                {showExploreLocations && (
                  <div className="maincheckbox">
                    <div className="rightarrow-flex">
                      <div>
                        <p className="explore-locations">Explore Locations</p>
                      </div>
                      <div className="rightarrow-icon">
                        <MdOutlineKeyboardArrowRight size={25} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Box>
          </Modal>
        </div>
      </div>
      <ul className="explore-nav">
        <li>
          <Link to="/explore/foryou">Foryou</Link>
        </li>
        <li>
          <Link to="/explore/trending">Trending</Link>
        </li>
        <li>
          <Link to="/explore/news">News</Link>
        </li>
        <li>
          <Link to="/explore/sports">Sports</Link>
        </li>
        <li>
          <Link to="/explore/entertainment">Entertainment</Link>
        </li>
      </ul>
    </div>
  );
};
export default Explore;
