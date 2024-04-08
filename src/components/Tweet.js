import React, { useState, useEffect } from 'react';
import Avatar from 'react-avatar';
import { SlLike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import { CiBookmarkCheck } from "react-icons/ci";
import { CiViewBoard } from "react-icons/ci";
import { BiRepost } from "react-icons/bi";

const Tweet = ({ tweets }) => {

    const [likes, setLikes] = useState({});
    const [comments, setComments] = useState({});
    const [commentInput, setCommentInput] = useState("");
    const [showCommentBox, setShowCommentBox] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const getTimeAgo = (timestamp) => {
        const timeDifference = currentTime - timestamp;
        const seconds = Math.floor(timeDifference / 1000);
        if (seconds < 60) {
            return `${seconds} seconds ago`;
        } else if (seconds < 3600) {
            return `${Math.floor(seconds / 60)} minutes ago`;
        } else if (seconds < 86400) {
            return `${Math.floor(seconds / 3600)} hours ago`;
        } else {
            return `${Math.floor(seconds / 86400)} days ago`;
        }
    };

    const handleLike = (uuid) => {
        setLikes((prevLikes) => ({
            ...prevLikes,
            [uuid]: (prevLikes[uuid] || 0) + 1
        }));
    };

    const handleComment = (uuid) => {
        setComments((prevComments) => ({
            ...prevComments,
            [uuid]: (prevComments[uuid] || 0) + 1
        }));
        setShowCommentBox((prevShowCommentBox) => !prevShowCommentBox);
    };

    const handleCommentSubmit = (uuid) => {
        setShowCommentBox(false);
        setCommentInput("");
    };

    const renderTweetButtons = (tweet, index) => {
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
                    <button onClick={() => handleComment(uuid)} className="hover:text-blue-500">
                        <FaRegComment size={"24px"} />
                    </button>
                    <p>{comments[uuid] || 0}</p>
                    <div>
                        {showCommentBox && (
                            <div>
                                <input
                                    type="text"
                                    placeholder="Write a comment..."
                                    value={commentInput}
                                    onChange={(e) => setCommentInput(e.target.value)}
                                />
                                <button onClick={() => handleCommentSubmit(uuid)}>Submit</button>
                            </div>
                        )}
                    </div>
                </div>
                <div className=" flex items-center hover:text-blue-500">
                    <CiBookmarkCheck size={"24px"} />
                    <p>0</p>
                </div>
                <div className="flex items-center hover:text-blue-500">
                    <CiViewBoard size={"24px"} />
                    <p>0</p>
                </div>
                <div className=" flex items-center hover:text-blue-500">
                    <BiRepost size={"24px"} />
                    <p>0</p>
                </div>
            </div>
        );
    };

    return (
        <div>
            <div>
                <div>
                    <div className="flex">
                        <Avatar
                            src="https://pbs.twimg.com/profile_images/1661229397880492033/-1d0znir_400x400.jpg"
                            size="40"
                            round={true}
                        />
                        <div>
                            <div className="flex ml-4 items-center">
                                <h2>Harsa Dash</h2>
                                <p className="text-gray-400 text-sm">@Harsa_Dash .1m</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ml-12 mt-4  tweet-area">
                    <input type="text" placeholder="tweet" />
                    <div>
                        {tweets.map((tweet, index) => (
                            <div key={index}>
                                <button className="text-blue-500 hover:text-blue-700">
                                    {tweet.tweet}
                                </button>
                                <p>{getTimeAgo(tweet.timestamp)} </p>
                                <div>
                                    {renderTweetButtons(tweet, index)}
                                </div>
                            </div>
                        )).reverse()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tweet;