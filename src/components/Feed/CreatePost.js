import { useState } from "react";
import { FaImage } from "react-icons/fa";
import { MdOutlineGifBox } from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { FiSmile } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { GrSchedulePlay } from "react-icons/gr";
import Avatar from "react-avatar";
import "./Feed.css";
import { BASE_URL } from "../../config";

const CreatePost = (props) => {
  const [tweet, setTweet] = useState("");
  const [error, setError] = useState(null);

  const saveTweet = async () => {
    if (tweet.trim() === "") {
      setError("Tweet cannot be empty.");
      return;
    }
    const tweetPayload = {
      tweet: tweet,
      timestamp: new Date().getTime(),
      likes: 0,
      isHighlight: false,
    };
    setTweet("");
    setError(null);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${BASE_URL}/Tweet`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(tweetPayload),
      });
      const result = await res.json();
      props.onSaveTweet(result.data);
      if (!res.ok) throw new Error(result.message);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="w-[100%]">
      <div className="mt-2">
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
              placeholder="What is happening?!"
              onChange={(e) => {
                setTweet(e.target.value);
                setError(null);
              }}
              style={{
                borderRadius: "10px",
                padding: "15px",
                marginBottom: "15px",
              }}
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
              className={`bg-[#1D9Df0] text-lg items-center text-black px-4 py-1 border-none rounded-full ${tweet.trim() === "" && "opacity-50 cursor-not-allowed"
                }`}
              onClick={() => {
                saveTweet();
              }}
              disabled={tweet.trim() === ""}
            >
              Post
            </button>
          </div>
          {error && <p className="text-red-500 ml-4">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
