import React from "react";
import { postData } from "../../StaticData";

const Posts = () => {
  return (
    <div>
      {postData?.map((item, index) => {
        return (
          <div key={index} className="postdata-mainflex">
            <div className="postdata-flex">
              <div>
                <img
                  src={item.icon}
                  alt=""
                  height={45}
                  width={45}
                  className="postdp-icon"
                />
              </div>
              <div>
                <div className="postdata">
                  <p className="postdata-id">{item.userId}</p>
                  <p className="postdata-username">{item.userName}</p>
                  <p className="postdata-dot">{item.dot}</p>
                  <p className="postdata-time">{item.time}</p>
                </div>
                <p className="postdata-content">{item.content}</p>
              </div>
            </div>
            <div>
              <p className="postdata-tripledot">...</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
