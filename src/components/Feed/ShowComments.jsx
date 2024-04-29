import React from "react";
import { Button } from "@mui/material";
import { FcLike, FcDislike } from "react-icons/fc";
import Avatar from "react-avatar";
import { BASE_URL } from "../../config";
import { useDispatch } from "react-redux";
import { dislikeComment, likeComment } from "../../redux/action";

const ShowComments = ({ comments, tweetId }) => {
  const dispatch = useDispatch();

  const handleLikeComment = async (commentId) => {
    try {
      const res = await fetch(`${BASE_URL}/likecomment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tweetId, commentId }), 
      });
      if (!res.ok) {
        throw new Error('Failed to like comment');
      }
      dispatch(likeComment(tweetId, commentId)); 
      console.log('Comment liked successfully:', commentId);
    } catch (error) {
      console.error('Failed to like comment:', error);
    }
  };

  const handleDislikeComment = async (commentId) => {
    try {
      const res = await fetch(`${BASE_URL}/dislikecomment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tweetId, commentId }), 
      });
      if (!res.ok) {
        throw new Error('Failed to dislike comment');
      }
      dispatch(dislikeComment(tweetId, commentId)); 
    } catch (error) {
      console.error('Failed to dislike comment:', error);
    }
  };



  return (
    <div className="comment-container border-gray-200">
      {comments && comments.length > 0 ? (
        comments.map((comment, commentIndex) => (
          <div key={commentIndex} className="comment-item flex">
            <div className="comment-avatar flex items-start">
              <Avatar
                src="https://pbs.twimg.com/profile_images/1661229397880492033/-1d0znir_400x400.jpg"
                size="30"
                round={true}
              />
            </div>
            <div className="comment-content">
              <div className="comment-author flex  items-center">
                <h2>Harsa Dash</h2>
                <p className="text-gray-400 text-sm pl-2">@Harsa_Dash</p>
              </div>
              <p className="comment-text">{comment.text}</p>
              <div className="flex items-center">
                <Button onClick={() => handleLikeComment(comment._id)}> 
                  <FcLike size={"15px"} />
                </Button>
                <div>{comment.likes} </div>
                <Button onClick={() => handleDislikeComment(comment._id)}> 
                  <FcDislike size={"15px"} />
                </Button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No comments yet</p>
      )}
    </div>
  );
};

export default ShowComments;
