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
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${BASE_URL}/users`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
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

  const handleFollow = async (item) => {
    console.log("isFollow",item.isFollow);
    const token = localStorage.getItem("token");
    const id = item;
    console.log(item);

    

    try {
      const res = await fetch(`${BASE_URL}/follow`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ id }),
      });
      const result = await res.json();
      console.log("result", result);
      if (!res.ok) throw new Error(result.message);
      fetchUsers()
    } catch (error) {
      console.error("erroe", error);
      alert(error.message);
    }

  };
  const handleUnFollow = async (item) => {
    console.log("isFollow",item.isFollow);
    const token = localStorage.getItem("token");
    const id = item;
    try {
      const res = await fetch(`${BASE_URL}/unfollow`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ id }),
      });
      const result = await res.json();
      console.log("result", result);
      if (!res.ok) throw new Error(result.message);
      fetchUsers()
    } catch (error) {
      console.error("erroe", error);
      alert(error.message);
    }

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
              {item.isFollow ? (
                <Button type="primary" onClick={() => handleUnFollow(item)}>Unfollow</Button>
              ) : (
                <Button type="primary" onClick={() => handleFollow(item)}>Follow</Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foryou;
