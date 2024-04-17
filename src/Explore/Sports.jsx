import React from "react";
import Explore from "../Page/Explore";
import { forYou, name } from "../StaticData";

const Sports = () => {
  return (
    <div>
      <Explore />
      {forYou.map((item, index) => (
        <div key={index} className="foryou-mapdata">
          <div>
            <p>{item.nameOne}</p>
            <p className="nametwo-text">{item.nameTwo}</p>
            <p>
              Trending With <span className="different-name">{name}</span>
            </p>
          </div>
          <div>
            <p>···</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sports;
