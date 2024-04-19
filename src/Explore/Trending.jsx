import React from "react";
import Explore from "../Page/Explore";
import { trending } from "../StaticData";

const Trending = () => {
  return (
    <div>
      <Explore />
      <div className="foryou-borderbox">
        <p>India trends</p>

        {trending.map((item, index) => {
          return (
            <div className="foryou-mapdata">
              <div key={index}>
                <p>{item.numberOneTrending}</p>
                <p>{item.numberTwoTrending}</p>
                <p>{item.numberThreeTrending}</p>
              </div>
              <div>
                <p>...</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
