/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { SlLike, SlDislike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import { Modal, Button, Box, Typography } from "@mui/material";
import { CiViewBoard } from "react-icons/ci";
import { BiRepost } from "react-icons/bi";
import "./TweetItem.css";
import { useDispatch } from "react-redux";
import { addToHighlight, deleteToHighlight } from "../../redux/action";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { BASE_URL } from "../../config";

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

const TweetItem = ({ tweet, unlikeTweet, likeTweet }) => {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
    setComment("");
  };

  const handleClose = () => setOpen(false);

  const handleLike = async () => {
    try {
      const res = await fetch(`${BASE_URL}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tweetId: tweet._id }),
      });

      if (!res.ok) {
        throw new Error('Failed to like tweet');
      }
      dispatch(likeTweet(tweet._id));

    } catch (error) {
      console.error('Failed to like tweet:', error);
    }
  }
  const handleUnlike = async () => {
    try {
      const res = await fetch(`${BASE_URL}/unlike`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tweetId: tweet._id }),
      });
      if (!res.ok) {
        throw new Error('Failed to unlike tweet');
      }
      dispatch(unlikeTweet(tweet._id));
    } catch (error) {
      console.error('Failed to unlike tweet:', error);
    }
  };



  const changeComment = (e) => {
    setComment(e.target.value);
  };

  const handleComment = async () => {
    if (comment.trim() === "") {
      alert("Comment Box is empty!");
      return;
    }
    try {
      const res = await fetch(`${BASE_URL}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tweetId: tweet._id, text: comment }),
      });
      console.log(tweet._id);
      if (!res.ok) {
        const errorMessage = await res.text();
        throw new Error(`Failed to submit comment: ${errorMessage}`);
      }
      const updatedTweet = await res.json();
      setComment(updatedTweet.comments);
      console.log(updatedTweet);
      handleClose();
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };
  

  const handleBookmarkSave = (tweetId) => {
    const tweetData = {
      tweetId,
    };
    dispatch(addToHighlight(tweetData));
  };

  const handleBookMarkUnSave = (tweetId) => {
    const tweetData = {
      tweetId,
    };
    dispatch(deleteToHighlight(tweetData));
  };

  return (
    <div className="flex p-3 items-center w-100" key={tweet?.id}>
      <div className="flex w-full justify-between items-center">
        <div className="flex items-center">
          <Button onClick={handleLike}>
            <SlLike size={"24px"} />
          </Button>
          <div>{tweet.likes}</div>
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
          {!tweet.isHighlight ? (
            <Button onClick={() => handleBookmarkSave(tweet.id)}>
              <FaRegBookmark size={24} />
            </Button>
          ) : (
            <Button onClick={() => handleBookMarkUnSave(tweet.id)}>
              <FaBookmark size={24} />
            </Button>
          )}
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
