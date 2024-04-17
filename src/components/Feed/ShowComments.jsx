//{ import { BiShow } from "react-icons/bi";
import './ShowComments.css';
import { Button } from '@mui/material';
import { FcLike, FcDislike } from "react-icons/fc";

import Avatar from 'react-avatar';
// import TweetItem from './TweetItem';

const ShowComments = ({ comments = [], tweetId, likeComment, dislikeComment }) => {

  
    const handleLikeComment = (commentId) => {
            likeComment(tweetId, commentId);
    };
    const handleDislikeComment = (commentId) => {
            dislikeComment(tweetId, commentId);
    };
    // console.log("comments",comments);
    return (
        <div className="comment-container border-gray-200">
            {/* <h2><BiShow /></h2> */}
            {
                comments.map((comment, commentIndex) => (
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
                            <div className="flex items-center">
                                <Button onClick={() => handleLikeComment(comment.id)}>
                                    <FcLike size={"15px"} />
                                </Button>
                                <div>{comment.likes} </div>
                                <Button onClick={() => handleDislikeComment(comment.id)}>
                                    <FcDislike size={"15px"} />
                                </Button>
                            </div>
                        </div>
                    </li>
                ))}
        </div>
    );
};

export default ShowComments;