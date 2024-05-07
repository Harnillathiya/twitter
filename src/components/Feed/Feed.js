import { Container } from "@mui/material";
import CreatePost from "./CreatePost";
import Tweet from "./Tweet";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addComment, addTweet, dislikeComment, likeComment, likeTweet, TWEET_FETCH_FAILED, TWEET_FETCH_SUCCESS, tweetFetchStart, unlikeTweet } from "../../redux/action";


const Feed = () => {
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.tweets.tweets) || [];
  const [selectedTab, setSelectedTab] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("token");
        const apiUrl = selectedTab
          ? "http://localhost:8000/api/showAllTweet"
          : "http://localhost:8000/api/showTweet";

          const response = await fetch(apiUrl, {
            headers: {
              Authorization: token,
            }
          });
        const data = await response.json();
        console.log(data);
        dispatch({ type: TWEET_FETCH_SUCCESS, payload: data.data });
      } catch (err) {
        console.error(err);
        dispatch({ type: TWEET_FETCH_FAILED, payload: err.message });
      }
    }

    dispatch(tweetFetchStart());
    fetchData();
  }, [dispatch, selectedTab]);

  const onSaveTweet = (payload) => {
    dispatch(addTweet(payload));
  };

  const onTweetLike = (_id) => {
    dispatch(likeTweet(_id));
  };

  const onTweetUnLike = (_id) => {
    dispatch(unlikeTweet(_id));
  };

  const onAddComment = (tweetId, comment) => {
    dispatch(addComment(tweetId, comment));
  };

  const onLikeComment = (tweetId, commentId) => {
    dispatch(likeComment(tweetId, commentId));
  };

  const onDislikeComment = (tweetId, commentId) => {
    dispatch(dislikeComment(tweetId, commentId));
  };

  return (
    <Container maxWidth="sm">
      <div className="info postmain flex items-center justify-between border-b border-gray-200">
        <div onClick={() => setSelectedTab(false)} className={`cursor-pointer hover:bg-gray-400 hover:border-b-cyan-300 w-full text-center p-4 ${selectedTab ? '' : 'bg-gray-400'}`}>
          <span >For You</span>
        </div>
        <div onClick={() => setSelectedTab(true)} className={`cursor-pointer hover:bg-gray-400 w-full text-center p-4 ${selectedTab ? 'bg-gray-400' : ''}`}>
          <span >Following</span>
        </div>
      </div>
      <div className="border border-gray-200">
        <CreatePost onSaveTweet={onSaveTweet} />
        <Tweet
          tweets={tweets}
          onTweetLike={onTweetLike}
          onTweetUnLike={onTweetUnLike}
          onAddComment={onAddComment}
          onLikeComment={onLikeComment}
          onDislikeComment={onDislikeComment}
        />
      </div>
    </Container>
  );
};

export default Feed;
