import { useState } from 'react';
import { FaImage } from "react-icons/fa";
import { MdOutlineGifBox } from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { FiSmile } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { GrSchedulePlay } from "react-icons/gr";
import Avatar from "react-avatar";
import "./Feed.css";
import { v4 as uuid } from "uuid";

const CreatePost = (props) => {

  const [tweet, setTweet] = useState("");


  const saveTweet = () => {
    const tweetPayload = {
      id: uuid(),
      tweet: tweet,
      timestamp: new Date().getTime()
    };
    setTweet("");
    props.onSaveTweet(tweetPayload)
  };


  return (
    <div className="w-[100%]">
      <div className="mt-2">
        <div className=" info postmain flex items-center justify-between border-b border-gray-200">
          <div className="cursor-pointer hover:bg-gray-400 hover:border-b-cyan-300 w-full text-center p-4">
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
    </div>
  );
};

export default CreatePost;


