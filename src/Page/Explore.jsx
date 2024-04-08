import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MdCancel } from "react-icons/md";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#000000",
  // border: "2px solid #000000",
  boxShadow: 24,
  // p: 20,
  color: "#FFFFFF",
};

const Explore = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="border-line">
        <div>
          <div className="searchbar-fix fixed top-0 left-0  bg-white">
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
                <IoSettingsSharp onClick={handleOpen} />
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <div className="explore-setting">
                      <div className="cancel-icon">
                        <MdCancel size={25} />
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
                    >
                      Location
                    </Typography>
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
        </div>
      </div>
    </>
  );
};

export default Explore;
