import React, { useState } from "react";
import { SlLike, SlDislike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import { Modal, Button, Box, Typography } from "@mui/material";
import { CiBookmarkCheck } from "react-icons/ci";
import { CiViewBoard } from "react-icons/ci";
import { BiRepost } from "react-icons/bi";
import "./TweetItem.css";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addToHighlight } from "../../redux/action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TweetItem = ({ tweet, likeTweet, unlikeTweet, setCommentText }) => {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
    setComment("");
  };

  const handleClose = () => setOpen(false);

  const handleLike = () => {
    console.log(likeTweet);
    if (tweet && tweet.id) {
      likeTweet(tweet.id);
    }
  };

  const handleUnlike = () => {
    if (tweet && tweet.id) {
      unlikeTweet(tweet.id);
    }
  };

  const handleComment = () => {
    if (comment.trim() === "") {
      alert("Comment Box is empty!");
      return;
    }
    if (tweet && tweet.id) {
      setCommentText(tweet.id, {
        id: uuid(),
        text: comment,
        likes: 0,
      });
      handleClose();
    }
  };

  const changeComment = (e) => {
    setComment(e.target.value);
  };

  const handleBookmark = () => {
    const tweetData = {
      id: tweet.id,
      likes: tweet.likes,
      timestamp: tweet.timestamp,
      tweet: tweet.tweet,
    };
    dispatch(addToHighlight(tweetData));
  };

  return (
    <div className="flex p-3 items-center w-100" key={tweet?.id}>
      <div className="flex w-full justify-between items-center">
        <div className="flex items-center">
          <Button onClick={handleLike}>
            <SlLike size={"24px"} />
          </Button>
          <div>{tweet?.likes}</div>
          <Button onClick={handleUnlike}>
            <SlDislike size={"24px"} />
          </Button>
        </div>
        <Button onClick={handleOpen}>
          <FaRegComment size={"24px"} />
          <div className="showcomment ml-4">
            {tweet && <p>{tweet.comments ? tweet.comments.length : 0} </p>}
          </div>
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <textarea
              value={comment}
              onChange={(e) => changeComment(e)}
              placeholder="write a comment...."
              style={{
                width: "100%",
                height: "100px",
                borderRadius: "10px",
                padding: "10px",
                fontSize: "16px",
                marginTop: "10px",
                border: "1px solid #ccc",
              }}
            />
            <Button
              onClick={handleComment}
              variant="contained"
              color="primary"
              style={{ marginTop: "10px" }}
            >
              Submit
            </Button>
            <Button
              onClick={handleClose}
              variant="contained"
              color="secondary"
              style={{ marginTop: "10px", marginLeft: "10px" }}
            >
              Close
            </Button>
          </Box>
        </Modal>
        <div className="flex items-center">
          <Button onClick={handleBookmark}>
            <CiBookmarkCheck size={"24px"} />
          </Button>
          <p>0</p>
        </div>
        <div className="flex items-center">
          <Button>
            <CiViewBoard size={"24px"} />
          </Button>
          <p>0</p>
        </div>
        <div className="flex items-center">
          <Button>
            <BiRepost size={"24px"} />
          </Button>
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default TweetItem;
