import React from "react";
import Avatar from "react-avatar";
import ShowComments from "./ShowComments";
import TweetItem from "./TweetItem";

const Tweet = ({
  tweets,
  onTweetLike,
  onTweetUnLike,
  onAddComment,
  onDislikeComment,
  onLikeComment,
}) => {
  const getTimeAgo = (timestamp) => {
    const timeDifference = Date.now() - timestamp;
    const seconds = Math.floor(timeDifference / 1000);
    if (seconds < 0) {
      return `0 seconds ago`;
    } else if (seconds < 60) {
      return `${seconds} seconds ago`;
    } else if (seconds < 3600) {
      return `${Math.floor(seconds / 60)} minutes ago`;
    } else if (seconds < 86400) {
      return `${Math.floor(seconds / 3600)} hours ago`;
    } else {
      return `${Math.floor(seconds / 86400)} days ago`;
    }
  };

  return (
    <div className="p-4">
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
                <p className="text-gray-400 text-sm pl-2">@Harsa_Dash</p>
                {tweets?.length > 0 && (
                  <p className="text-gray-400 text-sm pl-2">
                    {getTimeAgo(tweets[0].timestamp)}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 tweet-area">
          <div>
            {tweets?.map((tweet, index) => (
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
                <ShowComments
                  tweetId={tweet._id}
                  onLikeComment={onLikeComment}
                  onDislikeComment={onDislikeComment}
                  comments={tweet.comments}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
