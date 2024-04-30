import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { SlDislike, SlLike } from "react-icons/sl";
import { likeTweet, unlikeTweet } from "../../redux/action";

const Likes = () => {
  const [tweetsWithMostLikes, setTweetsWithMostLikes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTweetsWithMostLikes = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8000/api/tweets/most-likes');
        if (!response.ok) {
          throw new Error('Failed to fetch tweets with most likes');
        }
        const data = await response.json();
        setTweetsWithMostLikes(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tweets with most likes:', error);
        setError('Failed to fetch tweets with most likes');
        setLoading(false);
      }
    };

    fetchTweetsWithMostLikes();
  }, []);

  const handleLike = async (tweetId) => {
    try {
      await likeTweet(tweetId); // Dispatch action to like tweet
      // Update likes count in state
      setTweetsWithMostLikes(prevTweets => {
        return prevTweets.map(tweet => {
          if (tweet._id === tweetId) {
            return { ...tweet, likes: tweet.likes + 1 };
          }
          return tweet;
        });
      });
    } catch (error) {
      console.error('Failed to like tweet:', error);
    }
  };

  const handleUnlike = async (tweetId) => {
    try {
      await unlikeTweet(tweetId); // Dispatch action to unlike tweet
      // Update likes count in state
      setTweetsWithMostLikes(prevTweets => {
        return prevTweets.map(tweet => {
          if (tweet._id === tweetId && tweet.likes > 0) {
            return { ...tweet, likes: tweet.likes - 1 };
          }
          return tweet;
        });
      });
    } catch (error) {
      console.error('Failed to unlike tweet:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {tweetsWithMostLikes.map((tweet, index) => (
        <div key={index}>
          <p>{tweet.tweet}</p>
          <div style={{ display: "flex" }}>
            <Button onClick={() => handleLike(tweet._id)}>
              <SlLike size={"24px"} />
            </Button>
            <p>{tweet.likes}</p>
            <Button onClick={() => handleUnlike(tweet._id)}>
              <SlDislike size={"24px"} />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Likes;
