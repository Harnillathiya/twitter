import React from "react";
import Explore from "../Page/Explore";
import { news } from "../StaticData";

const News = () => {
  return (
    <div>
      <Explore />
      <div className="foryou-borderbox">
        {news.map((item, index) => (
          <div key={index} className="foryou-mapdata">
            <div>
              <p>{item.newsOne}</p>
              <p className="nametwo-text">{item.newsTwo}</p>
              <p>
                Trending With{" "}
                <span className="different-name">{item.newsThree}</span>
              </p>
            </div>
            <div>
              <p>···</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
