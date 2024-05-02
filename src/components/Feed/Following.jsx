import React, { useState, useEffect } from 'react';
import TweetItem from './TweetItem';

const Following = (onTweetLike, onTweetUnLike, onAddComment) => {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        const fetchTweets = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    console.error('Token not found');
                    return;
                }

                const response = await fetch('http://localhost:8000/api/showAllTweet', {
                    method: 'GET',
                    headers: {
                        Authorization: token,
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch tweets');
                }

                const data = await response.json();
                setTweets(data.data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching tweets:', error);
            }
        };

        fetchTweets();
    }, []);

    return (
        <div>
            <div>
            {tweets.map((tweet, index) => (
              <div key={index}>
                <p className="text-blue-500 hover:text-blue-700">
                  {tweet.tweet}
                </p>
                <TweetItem
                  tweet={tweet}
                  likeTweet={onTweetLike}
                  unlikeTweet={onTweetUnLike}
                  onAddComment={onAddComment}
                />
              </div>
            ))}
          </div>
        </div>
    );
};

export default Following;
