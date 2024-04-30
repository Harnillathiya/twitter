import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { SlDislike, SlLike } from "react-icons/sl";
import { BASE_URL } from "../../config";

const Likes = () => {
  const tweets = useSelector((state) => state.tweets.tweets);

  const handleLike = async (tweetId) => {
    try {
      const response = await fetch(`${BASE_URL}/like`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tweetId }),
      });
      const data = await response.json();
      if (!data.success) {
        console.error("Failed to like tweet:", data.message);
      }
    } catch (error) {
      console.error("Error liking tweet:", error);
    }
  };

  const handleUnlike = async (tweetId) => {
    try {
      const response = await fetch(`${BASE_URL}/unlike`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tweetId }),
      });
      const data = await response.json();
      if (!data.success) {
        console.error("Failed to unlike tweet:", data.message);
      }
    } catch (error) {
      console.error("Error unliking tweet:", error);
    }
  };


  return (
    <div>
      {tweets?.map((item, index) => {
        return (
          <div key={index}>
            {item.likes > 0 ? (
              <div>
                <p>{item.tweet}</p>
                <div style={{ display: "flex" }}>
                  <Button onClick={() => handleLike(item.likes)}>
                    <SlLike size={"24px"} />
                  </Button>
                  <p>{item?.likes}</p>
                  <Button onClick={() => handleUnlike(item.likes)}>
                    <SlDislike size={"24px"} />
                  </Button>
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Likes;
