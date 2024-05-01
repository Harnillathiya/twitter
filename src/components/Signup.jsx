import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import loginmark from "../image/loginmark.jpeg";
import "./Signup.css";
import { BASE_URL } from "../config";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/register`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const result = await res.json();
      if (!res.ok) alert(result.message);
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="header">
        <img className="login-image2 w-5" src={loginmark} alt="loginmark" />
      </div>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          placeholder="Full Name"
          onChange={handleChange}
          required
          className="Signup_btn"
        />
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="Signup_btn"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="Signup_btn"
        />
        <button type="submit">Signup</button>
      </form>
      <p className="signin-link">
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
};

export default Signup;
