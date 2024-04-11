import React from 'react';
import { useSelector } from 'react-redux';
// import { BiShow } from "react-icons/bi";
import './ShowComments.css';
import Avatar from 'react-avatar';

const ShowComments = () => {
    const tweets = useSelector((state) => state.tweets.tweets);
    
    

    return (
        <div className="comment-container border-gray-200">
            {/* <h2><BiShow /></h2> */}
            {tweets.map((tweet, index) => (
                <div className="tweet-container" key={index}>
                    <div className="comment-section">
                        <ul>
                            {tweet.comments && tweet.comments.map((comment, commentIndex) => (
                                <li key={commentIndex} className="comment-item">
                                    <div className="comment-avatar flex">
                                        <Avatar
                                            src="https://pbs.twimg.com/profile_images/1661229397880492033/-1d0znir_400x400.jpg"
                                            size="30"
                                            round={true}
                                        />
                                    </div>
                                    <div className="comment-content">
                                        <div className="comment-author flex ml-2 items-center">
                                            <h2>Harsa Dash</h2>
                                            <p className="text-gray-400 text-sm pl-2">@Harsa_Dash</p>
                                        </div>
                                        <p className="comment-text">{comment.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShowComments;
