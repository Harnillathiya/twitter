import React, { useEffect, useState } from "react";
import Explore from "../Page/Explore";
import { BASE_URL } from "../config";
import { Avatar, Button } from "antd";

const Foryou = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFollow = (item) => {
    console.log(item);
  };

  return (
    <div>
      <Explore />
      <div style={{ border: "1px solid black" }}>
        {users.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "5px",
              padding: "10px",
              borderBottom: "1px solid #ccc",
            }}
          >
            <div style={{ display: "flex" }}>
              <Avatar
                style={{
                  verticalAlign: "middle",
                  backgroundColor: "grey",
                  color: "black",
                  fontWeight: "700",
                  marginRight: "10px",
                  flex: "none",
                }}
                size="large"
              >
                {item.username.charAt(0).toUpperCase()}
              </Avatar>
              <div style={{ flexGrow: 1 }}>
                <p>{item.username}</p>
                <p>{item.email}</p>
              </div>
            </div>
            <div>
              <Button
                type="primary"
                onClick={() => handleFollow(item)}
              >
                Follow
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foryou;
