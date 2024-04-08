import React from 'react'
import { SlLike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import { CiBookmarkCheck } from "react-icons/ci";
import Button from '@mui/material/Button';
import { CiViewBoard } from "react-icons/ci";
import { BiRepost } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { addComment } from '../redux/action';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'white',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    p: 4,
};

const TweetItem = ({ tweet, index }) => {
    const [likes, setLikes] = useState({});
    const [BookmarkCheck,setBookmarkCheck] = useState({});
    const [ViewBoard,setViewBoard] = useState({});
    const [Repost,setRepost] = useState ({});
    const [comments, setComments] = useState({});
    const [commentInputs, setCommentInputs] = useState({});
    const [showCommentBox, setShowCommentBox] = useState({});

    const dispatch = useDispatch();

    const handleLike = (uuid) => {
        setLikes((prevLikes) => ({
            ...prevLikes,
            [uuid]: (prevLikes[uuid] || 0) + 1
        }));
    };

    const handleComment = (uuid) => {
        setShowCommentBox((prevShowCommentBox) => ({
            ...prevShowCommentBox,
            [uuid]: !prevShowCommentBox[uuid]
        }));
    };

    const handleCommentInputChange = (uuid, value) => {
        setCommentInputs((prevCommentInputs) => ({
            ...prevCommentInputs,
            [uuid]: value
        }));
    };

    const handleCommentSubmit = (uuid) => {
        if (commentInputs[uuid.payload]) {
            dispatch(addComment(uuid, commentInputs[uuid])); 
            setComments((prevComments) => ({
                ...prevComments,
                [uuid]: (prevComments[uuid] || 0) + 1
            }));
            setCommentInputs((prevCommentInputs) => ({
                ...prevCommentInputs,
                [uuid]: ''
            }));
        } else {
            alert("Please enter a comment before submitting.");
        }
    };

    const handleBookmarkCheck = (uuid) => {
        setBookmarkCheck((prevBookmarkCheck) => ({
            ...prevBookmarkCheck,
            [uuid]: (prevBookmarkCheck[uuid] || 0) + 1
        }));
    };

    const handleViewBoard = (uuid) => {
        setViewBoard((prevViewBoard) => ({
            ...prevViewBoard,
            [uuid]: (prevViewBoard[uuid] || 0) + 1
        }));
    };

    const handleRepost = (uuid) => {
        setRepost((prevRepost) => ({
            ...prevRepost,
            [uuid]: (prevRepost[uuid] || 0) + 1
        }));
    };

    const uuid = index;

    return (
        <div className="flex justify-between p-3" key={index}>
            <div className="flex items-center">
                <button onClick={() => handleLike(uuid)} className="hover:text-blue-500">
                    <SlLike size={"24px"} />
                </button>
                <p>{likes[uuid] || 0}</p>
            </div>
            <div className="flex items-center">
                <div>
                    <Button onClick={() => handleComment(uuid)} className="hover:text-blue-500">
                        <FaRegComment size={"24px"} />
                    </Button>
                    <Modal
                        open={showCommentBox[uuid] || false}
                        onClose={() => setShowCommentBox((prevShowCommentBox) => ({
                            ...prevShowCommentBox,
                            [uuid]: false
                        }))}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Write a comment
                                <IoCloseSharp onClick={() => handleComment(uuid)} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} />
                            </Typography>
                            <textarea
                                placeholder="Write a comment..."
                                value={commentInputs[uuid] || ''}
                                onChange={(e) => handleCommentInputChange(uuid, e.target.value)}
                                style={{ width: '100%', height: '100px', borderRadius: '10px', padding: '10px', fontSize: '16px', marginTop: '10px', border: '1px solid #ccc' }}
                            />
                            <Button onClick={() => handleCommentSubmit(uuid)} variant="contained" color="primary" style={{ marginTop: '10px' }}>Submit</Button>
                        </Box>
                    </Modal>
                </div>
                <p>{comments[uuid] || 0}</p>
            </div>
            <div className=" flex items-center hover:text-blue-500">
                <button onClick={() => handleBookmarkCheck(uuid)}>
                    <CiBookmarkCheck size={"24px"} />
                </button>
                <p>{BookmarkCheck[uuid] || 0}</p>
                
            </div>
            <div className="flex items-center hover:text-blue-500">
                <button onClick={() => handleViewBoard(uuid)}>
                    <CiViewBoard size={"24px"} />
                </button>
                <p>{ViewBoard[uuid] || 0}</p>
                
            </div>
            <div className=" flex items-center hover:text-blue-500">
                <button onClick={() => handleRepost(uuid)}>
                    <BiRepost size={"24px"} />
                </button>
                <p>{Repost[uuid] || 0}</p>
                
            </div>

        </div>
    );
};

export default TweetItem;
