import React, { useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import "./Notifications.css";
import verification from "../image/verification-check-400x200.v1.46c9cb39.png";

const notificationHeader = [
  {
    id: "all",
    text: "All",
  },
  {
    id: "verified",
    text: "Verified",
  },
  {
    id: "mentions",
    text: "Mentions",
  },
];

const Notifications = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  const selectedTabHandler = (id) => {
    setSelectedTab(id);
    console.log("id", id);
  };

  return (
    <div>
      <div className="notification-flex">
        <div>
          <h1 className="notification">Notification</h1>
        </div>
        <div>
          <IoSettingsSharp size={20} />
        </div>
      </div>
      <div className="notification-header">
        {notificationHeader.map((item, index) => {
          return (
            <div key={index}>
              <p
                className="profileheader-text"
                onClick={() => selectedTabHandler(item.id)}
              >
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
      {selectedTab === "all" ? (
        <div>
          <p className="nothing">Nothing to see here — </p>
          <p className="nothing">yet</p>
          <p className="from">
            From likes to reposts and a whole lot more, this is where all the
            action happens.
          </p>
        </div>
      ) : null}
      {selectedTab === "verified" ? (
        <div>
          <img
            src={verification}
            alt=""
            width={270}
            className="verification-img"
          />
          <p className="nothing">Nothing to see here — </p>
          <p className="nothing">yet</p>
          <p className="from">
            Likes, mentions, reposts, and a whole lot more — when it comes from
            a verified account, you’ll find it here. Learn more
          </p>
        </div>
      ) : null}
      {selectedTab === "mentions" ? (
        <div>
          <p className="nothing">mentions to see here — </p>
          <p className="nothing">yet</p>
          <p className="from">
            When someone mentions you, you’ll find it here.
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Notifications;
