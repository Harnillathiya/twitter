import React from "react";
import { IoSettingsSharp } from "react-icons/io5";
import "./Notifications.css";

const Notifications = () => {
  return (
    <div>
      <div className="notification-flex">
        <div>
          <h1>Notification</h1>
        </div>
        <div>
          <IoSettingsSharp size={20} />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
