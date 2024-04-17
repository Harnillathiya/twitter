import React from "react";
import { forYou, name } from "../StaticData";
import Explore from "../Page/Explore";

const Foryou = () => {
  return (
    <div>
      <div>
        <Explore />
        <div className="foryou-borderbox">
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
      </div>
    </div>
  );
};

export default Foryou;
