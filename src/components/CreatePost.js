import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import { FaImage } from "react-icons/fa";
import { MdOutlineGifBox } from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { FiSmile } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { GrSchedulePlay } from "react-icons/gr";
import Avatar from "react-avatar";
import { SlLike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import { CiBookmarkCheck } from "react-icons/ci";
import { CiViewBoard } from "react-icons/ci";
import { BiRepost } from "react-icons/bi";
import "./Feed.css";
import { v4 as uuid } from "uuid";
import { addTweet } from "../redux/action";

const CreatePost = () => {
  const tweets = useSelector((state) => state.tweets);
  console.log(tweets);
  const dispatch = useDispatch();

  const [tweet, setTweet] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  const saveTweet = () => {
    const tweetPayload = {
      id: uuid(),
      tweet: tweet,
      timestamp: new Date().getTime()
    };
    dispatch(addTweet(tweetPayload));
    setTweet("");
  };

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

  return (
    <div className="w-[100%]">
      <div className="mt-2">
        <div className=" info postmain flex items-center justify-between border-b border-gray-200">
          <div className="cursor-pointer hover:bg-gray-400 w-full text-center p-4">
            <span>for you</span>
          </div>
          <div className="cursor-pointer hover:bg-gray-400 w-full text-center p-4">
            <span>following</span>
          </div>
        </div>

        <div>
          <div className="flex items-center p-4">
            <div>
              <Avatar
                src="https://pbs.twimg.com/profile_images/1661229397880492033/-1d0znir_400x400.jpg"
                size="40"
                round={true}
              />
            </div>
            <input
              className="w-full outline-none border-none text-lg ml-3"
              value={tweet}
              type="text"
              placeholder="What is happing ?!"
              onChange={(e) => setTweet(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between p-4 border-b border-gray-300">
            <div className="flex justify-stretch my-1 icons">
              <a href="a">
                <FaImage />
              </a>
              <a href="a">
                <MdOutlineGifBox />
              </a>
              <a href="a">
                <BiPoll />
              </a>
              <a href="a">
                <FiSmile />
              </a>
              <a href="a">
                <GrSchedulePlay />
              </a>
              <a href="a">
                <FaLocationDot />
              </a>
            </div>
            <button
              className="bg-[#1D9Df0] text-lg items-center text-black px-4 py-1 border-none rounded-full"
              onClick={saveTweet}>
              Post
            </button>
          </div>
        </div>
      </div>

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
              <div className="">
                <p className="text-gray-400 text-sm ml-4">I’m quitting YouTube</p>
              </div>
            </div>
          </div>

        </div>
        <div className="ml-12 mt-4  tweet-area">
          <input type="text" placeholder="tweet" value={tweet} onChange={(e) => setTweet(e.target.value)} />
          <div>
            {tweets.tweets.map((tweet, index) => (
              <div key={index}>
                <button className="text-blue-500 hover:text-blue-700" onClick={() => setTweet(tweet)}>
                  {tweet.tweet}
                </button>
                <p>{getTimeAgo(tweet.timestamp)} {/* Display time ago */}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between p-3">
            <div className="flex items-center">
              <SlLike size={"24px"} />
              <p>0</p>
            </div>
            <div className="flex items-center">
              <FaRegComment size={"24px"} />
              <p>0</p>
            </div>
            <div className="flex items-center">
              <CiBookmarkCheck size={"24px"} />
              <p>0</p>
            </div>
            <div className="flex items-center">
              <CiViewBoard size={"24px"} />
              <p>0</p>
            </div>
            <div className="flex items-center">
              <BiRepost size={"24px"} />
              <p>0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
